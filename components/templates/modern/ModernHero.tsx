import Image from "next/image";

type Props = {
	bride: string;
	groom: string;
	displayDate: string;
	mainMessage: string;
	heroBackground: string;
	heroImage: string;
};

export function ModernHero({
	bride,
	groom,
	displayDate,
	mainMessage,
	heroBackground,
	heroImage,
}: Props) {
	return (
		<section className="relative min-h-[75vh] flex items-center overflow-hidden">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/25 to-secondary/30" />
				<Image
					src={heroBackground || "/placeholder.svg"}
					alt="Fondo moderno"
					fill
					className="object-cover opacity-35"
					priority
				/>
			</div>
			<div className="relative z-10 w-full">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div className="order-2 md:order-1">
							<div className="rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl ring-1 ring-border/60 p-8">
								<h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
									<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
										{bride} & {groom}
									</span>
								</h1>
								<p className="mt-4 text-base sm:text-lg text-foreground/70">
									{mainMessage}
								</p>
								<div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border/60 bg-white/80 backdrop-blur-md px-5 py-2 shadow-sm">
									<span className="text-sm font-medium text-foreground/80">
										{displayDate}
									</span>
								</div>
							</div>
						</div>
						<div className="order-1 md:order-2 relative">
							<div className="relative mx-auto w-full max-w-md rounded-3xl overflow-hidden shadow-xl ring-1 ring-border/60">
								<Image
									src={heroImage || "/placeholder.svg"}
									alt="Pareja"
									width={800}
									height={1000}
									className="h-auto w-full object-cover"
									priority
								/>
							</div>
							<div className="absolute -z-0 -top-6 -right-6 w-24 h-24 rounded-full bg-accent/40 blur-md" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
