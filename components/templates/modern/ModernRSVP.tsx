"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Phone } from "lucide-react";

type Props = {
	title: string;
	message: string;
	deadline: string;
	phone: string;
	whatsapp: string;
	bride: string;
	groom: string;
};

export function ModernRSVP({
	title,
	message,
	deadline,
	phone,
	whatsapp,
	bride,
	groom,
}: Props) {
	const formattedDeadline = new Date(deadline + "T00:00:00").toLocaleDateString(
		"es-ES",
		{ day: "numeric", month: "long", year: "numeric" },
	);

	const whatsappMessage = encodeURIComponent(
		`Hola! Confirmo mi asistencia a la boda de ${bride} y ${groom}. Mi nombre es: `,
	);

  return (
    <section id="asistencia" className="py-16">
			<div className="max-w-3xl mx-auto">
				<div className="rounded-3xl bg-white/70 backdrop-blur-md border border-border/60 shadow-xl p-8 text-center">
					<h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-3">
						{title}
					</h2>
					<p className="text-foreground/70 mb-2">{message}</p>
					<div className="flex items-center justify-center gap-2 text-foreground/60 mb-8">
						<Calendar className="w-4 h-4" />
						<span className="font-medium">{formattedDeadline}</span>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="gap-2"
							onClick={() =>
								window.open(
									`https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`,
									"_blank",
								)
							}
						>
							<MessageCircle className="w-5 h-5" />
							Confirmar por WhatsApp
						</Button>
						<Button
							size="lg"
							variant="secondary"
							className="gap-2"
							onClick={() => window.open(`tel:${phone}`, "_blank")}
						>
							<Phone className="w-5 h-5" />
							Llamar
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
