import { ModernDressCode } from '@/components/templates/modern/ModernDressCode';
import { ModernGift } from '@/components/templates/modern/ModernGift';
import { ModernHero } from '@/components/templates/modern/ModernHero';
import { RSVPSection } from '@/components/wedding/rsvp-section';
import { Plus_Jakarta_Sans, Sora } from 'next/font/google';
import { AnimateOnScroll } from '../wedding/animate-on-scroll';
import { ModernDetails } from './modern/ModernDetails';
import { ModernSchedule } from './modern/ModernSchedule';

const display = Sora({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--font-serif',
});
const body = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
	variable: '--font-sans',
});

type TemplateProps = {
	bride: string;
	groom: string;
	initials: string;
	date: string;
	time: string;
	displayDate: string;
	mainMessage: string;
	photos: {
		heroBackground: string;
		left: string[];
		right: string[];
		gallery?: string[];
	};
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
	schedule: { time: string; event: string }[];
	giftRegistry: {
		enabled: boolean;
		title: string;
		message: string;
		bankName: string;
		accountHolder: string;
		accountNumber: string;
		clabe: string;
	};
	rsvp: {
		title: string;
		message: string;
		deadline: string;
		phone: string;
		whatsapp: string;
	};
	dressCode: {
		enabled: boolean;
		title: string;
		code: string;
		colors: string[];
		colorNames: string[];
		note?: string;
	};
	album: {
		enabled: boolean;
		title: string;
		hashtag: string;
		instagram: string;
		message: string;
	};
};

export function ModernInvitation(props: TemplateProps) {
	const {
		bride,
		groom,
		initials,
		date,
		time,
		displayDate,
		mainMessage,
		photos,
		ceremony,
		reception,
		schedule,
		giftRegistry,
		rsvp,
		dressCode,
	} = props;

	return (
		<main
			className={`theme-modern min-h-screen bg-background overflow-hidden ${display.variable} ${body.variable} font-sans`}
		>
			<AnimateOnScroll animation="scale" duration={600}>
				<div className="max-w-full mx-auto">
					<ModernHero
						bride={bride}
						groom={groom}
						displayDate={displayDate}
						mainMessage={mainMessage}
						heroBackground={photos.heroBackground}
						heroImage={photos.left[0] || '/placeholder.svg'}
					/>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll animation="slideUp" duration={600}>
				<div className="max-w-6xl mx-auto px-4">
					<ModernSchedule schedule={schedule} variant="summary" />
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll animation="fadeIn" duration={600}>
				<div className="max-w-6xl mx-auto px-4 pb-10">
					<ModernSchedule schedule={schedule} variant="timeline" />
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll animation="fadeLeft" duration={600}>
				<div className="max-w-6xl mx-auto px-4">
					<ModernDetails ceremony={ceremony} reception={reception} />
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll animation="fadeRight" duration={600}>
				<div className="max-w-6xl mx-auto px-4">
					<ModernDressCode
						enabled={dressCode.enabled}
						title={dressCode.title}
						code={dressCode.code}
						colors={dressCode.colors}
						colorNames={dressCode.colorNames}
						note={dressCode.note}
					/>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll animation="scale" duration={600}>
				<div className="max-w-6xl mx-auto px-4">
					<RSVPSection
						title={rsvp.title}
						message={rsvp.message}
						deadline={rsvp.deadline}
						phone={rsvp.phone}
						whatsapp={rsvp.whatsapp}
						bride={bride}
						groom={groom}
					/>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll animation="slideUp" duration={600}>
				<div className="max-w-6xl mx-auto px-4">
					<ModernGift
						enabled={giftRegistry.enabled}
						title={giftRegistry.title}
						message={giftRegistry.message}
						bankName={giftRegistry.bankName}
						accountHolder={giftRegistry.accountHolder}
						accountNumber={giftRegistry.accountNumber}
						clabe={giftRegistry.clabe}
					/>
				</div>
			</AnimateOnScroll>
		</main>
	);
}
