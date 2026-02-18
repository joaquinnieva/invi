const { spawn } = require("child_process");
let opened = false;
function openUrl(url) {
  if (process.platform === "win32") {
    spawn("powershell", ["-NoProfile", "-Command", `Start-Process "${url}"`], {
      stdio: "ignore",
      shell: false,
      detached: true,
    }).unref();
    return;
  }
  const cmd = process.platform === "darwin" ? "open" : "xdg-open";
  spawn(cmd, [url], { stdio: "ignore", detached: true }).unref();
}
const nextCmd =
  process.platform === "win32"
    ? "node_modules\\.bin\\next.cmd"
    : "node_modules/.bin/next";
const child = spawn(nextCmd, ["dev"], {
  stdio: ["inherit", "pipe", "pipe"],
  shell: false,
});
function maybeOpen(data) {
  if (opened) return;
  const s = data.toString();
  let m = s.match(/url:\s*(https?:\/\/[^\s]+)/i);
  if (!m) m = s.match(/Local:\s*(https?:\/\/[^\s]+)/i);
  if (!m) m = s.match(/(https?:\/\/[^\s]+:\d{2,5})/i);
  if (m) {
    opened = true;
    openUrl(m[1]);
  }
}
child.stdout.on("data", (d) => {
  process.stdout.write(d);
  maybeOpen(d);
});
child.stderr.on("data", (d) => {
  process.stderr.write(d);
  maybeOpen(d);
});
child.on("exit", (code) => {
  process.exit(code ?? 0);
});
process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
