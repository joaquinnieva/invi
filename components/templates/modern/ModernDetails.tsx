"use client";

import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, MapPin } from "lucide-react";

type Props = {
	ceremony: {
		name: string;
		address: string;
		time: string;
		mapUrl: string;
	};
	reception: {
		name: string;
		address: string;
		time: string;
		mapUrl: string;
	};
};

export function ModernDetails({ ceremony, reception }: Props) {
  return (
    <section id="detalles" className="py-16">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-center text-3xl sm:text-4xl font-semibold text-foreground mb-6">
					Detalles
				</h2>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-border/60 shadow-lg p-6">
						<h3 className="text-2xl font-semibold text-primary mb-4">
							Ceremonia
						</h3>
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<Clock className="w-5 h-5 text-primary mt-0.5" />
								<p className="font-medium">{ceremony.time} hrs</p>
							</div>
							<div className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-primary mt-0.5" />
								<div>
									<p className="font-medium">{ceremony.name}</p>
									<p className="text-sm text-foreground/60">
										{ceremony.address}
									</p>
								</div>
							</div>
							<Button
								variant="secondary"
								className="w-full mt-4 gap-2"
								onClick={() => window.open(ceremony.mapUrl, "_blank")}
							>
								<ExternalLink className="w-4 h-4" />
								Ver en Google Maps
							</Button>
						</div>
					</div>
					<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-border/60 shadow-lg p-6">
						<h3 className="text-2xl font-semibold text-primary mb-4">
							Recepción
						</h3>
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<Clock className="w-5 h-5 text-primary mt-0.5" />
								<p className="font-medium">{reception.time} hrs</p>
							</div>
							<div className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-primary mt-0.5" />
								<div>
									<p className="font-medium">{reception.name}</p>
									<p className="text-sm text-foreground/60">
										{reception.address}
									</p>
								</div>
							</div>
							<Button
								variant="secondary"
								className="w-full mt-4 gap-2"
								onClick={() => window.open(reception.mapUrl, "_blank")}
							>
								<ExternalLink className="w-4 h-4" />
								Ver en Google Maps
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
