import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<section className="px-4 pt-6">
			<div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-md p-6">
				<h2 className="font-script text-3xl sm:text-4xl text-primary text-center mb-4">
					Elige tu invitación
				</h2>
				<p className="text-center text-foreground/70 font-serif mb-6">
					Selecciona la plantilla que deseas ver.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button asChild size="lg">
						<Link href="/invitaciones/clasica">Ver Invitación Clásica</Link>
					</Button>
					<Button asChild size="lg" variant="secondary">
						<Link href="/invitaciones/moderna">Ver Invitación Moderna</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
