"use client";

import { AnimateOnScroll } from "@/components/wedding/animate-on-scroll";

interface ScheduleItem {
	time: string;
	event: string;
}

interface ScheduleSectionProps {
	schedule: ScheduleItem[];
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
	return (
		<section id="cronograma" className="py-20 px-4">
			<div className="max-w-3xl mx-auto">
				<AnimateOnScroll animation="fadeIn" duration={700}>
					<h2 className="font-script text-4xl sm:text-5xl text-primary text-center mb-12">
						Cronograma
					</h2>
				</AnimateOnScroll>

				<div className="relative md:mx-0 ml-6">
					{/* Timeline line */}
					<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

					<div className="space-y-8">
						{schedule.map((item, index) => (
							<AnimateOnScroll
								key={item.event}
								animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
								duration={700}
							>
								<div
									className={`relative flex items-center gap-4 md:gap-8 ${
										index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
									}`}
								>
									{/* Timeline dot */}
									<div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 shadow-md" />

									{/* Content */}
									<div
										className={`ml-12 md:ml-0 md:w-1/2 ${
											index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
										}`}
									>
										<div className="bg-card rounded-xl p-4 shadow-md inline-block">
											<span className="text-primary font-semibold text-lg">
												{item.time}
											</span>
											<p className="text-foreground/80 font-serif">
												{item.event}
											</p>
										</div>
									</div>
								</div>
							</AnimateOnScroll>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
