"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy, Gift } from "lucide-react";
import { useState } from "react";

type Props = {
	enabled: boolean;
	title: string;
	message: string;
	bankName: string;
	accountHolder: string;
	accountNumber: string;
	clabe: string;
};

export function ModernGift({
	enabled,
	title,
	message,
	bankName,
	accountHolder,
	accountNumber,
	clabe,
}: Props) {
	const [copied, setCopied] = useState<string | null>(null);
	if (!enabled) return null;

	const copy = async (label: string, value: string) => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(label);
			setTimeout(() => setCopied(null), 1500);
		} catch {}
	};

  return (
    <section id="regalo" className="py-16">
			<div className="max-w-4xl mx-auto">
				<div className="rounded-3xl bg-white/70 backdrop-blur-md border border-border/60 shadow-xl p-8">
					<div className="flex items-center gap-3 mb-4">
						<Gift className="w-6 h-6 text-primary" />
						<h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
					</div>
					<p className="text-foreground/70 mb-6">{message}</p>
					<div className="space-y-4">
						<div className="flex items-center justify-between gap-2">
							<div>
								<p className="text-sm text-foreground/60">Banco</p>
								<p className="font-medium">{bankName}</p>
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div>
								<p className="text-sm text-foreground/60">Titular</p>
								<p className="font-medium">{accountHolder}</p>
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div>
								<p className="text-sm text-foreground/60">Cuenta</p>
								<p className="font-medium font-mono">{accountNumber}</p>
							</div>
							<Button
								variant="secondary"
								onClick={() => copy("account", accountNumber)}
							>
								{copied === "account" ? (
									<Check className="w-4 h-4 text-green-600" />
								) : (
									<Copy className="w-4 h-4" />
								)}
							</Button>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div>
								<p className="text-sm text-foreground/60">CLABE</p>
								<p className="font-medium font-mono">{clabe}</p>
							</div>
							<Button variant="secondary" onClick={() => copy("clabe", clabe)}>
								{copied === "clabe" ? (
									<Check className="w-4 h-4 text-green-600" />
								) : (
									<Copy className="w-4 h-4" />
								)}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
