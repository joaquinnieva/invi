"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
	initials: string;
};

const navItems = [
	{ label: "Inicio", href: "#inicio" },
	{ label: "Cronograma", href: "#cronograma" },
	{ label: "Detalles", href: "#detalles" },
	{ label: "Asistencia", href: "#asistencia" },
	{ label: "Regalo", href: "#regalo" },
];

export function ModernNavbar({ initials }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const [shrunk, setShrunk] = useState(false);
	const [active, setActive] = useState<string>("#inicio");

	useEffect(() => {
		const onScroll = () => {
			setShrunk(window.scrollY > 12);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const ids = navItems.map((i) => i.href);
		const sections = ids
			.map((id) => document.querySelector(id))
			.filter((el): el is Element => !!el);
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (visible?.target?.id) {
					setActive(`#${visible.target.id}`);
				}
			},
			{ threshold: 0.3, rootMargin: "0px 0px -40% 0px" },
		);
		sections.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			const y = window.scrollY + element.getBoundingClientRect().top - 80;
			window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
			setActive(href);
			try {
				window.history.replaceState(null, "", href);
			} catch {}
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
			setActive("#inicio");
		}
		setIsOpen(false);
	};

	return (
		<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
			<div
				className={cn(
					"flex items-center gap-3 rounded-full bg-white/80 backdrop-blur-md shadow-xl ring-1 ring-border/60 transition-all",
					shrunk ? "px-3 py-1.5 shadow-lg" : "px-4 py-2",
				)}
			>
				<button
					type="button"
					onClick={() => scrollToSection("#inicio")}
					className="text-sm font-semibold tracking-wide bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
					aria-label="Ir al inicio"
				>
					{initials}
				</button>

				<div className="hidden md:flex items-center gap-2">
					{navItems.map((item) => (
						<button
							key={item.href}
							type="button"
							onClick={() => scrollToSection(item.href)}
							className={cn(
								"text-sm transition-colors px-3 py-1.5 rounded-full",
								active === item.href
									? "bg-foreground/10 text-foreground"
									: "text-foreground/80 hover:text-primary",
							)}
						>
							{item.label}
						</button>
					))}
				</div>

				<button
					type="button"
					onClick={() => setIsOpen((o) => !o)}
					className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
					aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
				>
					{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
				</button>
			</div>

			<div
				className={cn(
					"md:hidden mt-2 overflow-hidden transition-all duration-300",
					isOpen ? "max-h-96" : "max-h-0",
				)}
			>
				<div className="rounded-2xl bg-white/85 backdrop-blur-md shadow-lg ring-1 ring-border/60 p-3">
					{navItems.map((item) => (
						<button
							key={item.href}
							type="button"
							onClick={() => scrollToSection(item.href)}
							className={cn(
								"block w-full text-left px-3 py-2 rounded-md transition-colors",
								active === item.href
									? "bg-foreground/10 text-foreground"
									: "text-foreground/80 hover:text-primary",
							)}
						>
							{item.label}
						</button>
					))}
				</div>
			</div>
		</nav>
	);
}
