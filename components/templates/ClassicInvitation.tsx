import { ClassicHero } from '@/components/templates/classic/ClassicHero';
import { ClassicRSVP } from '@/components/templates/classic/ClassicRSVP';
import { CountdownSection } from '@/components/wedding/countdown-section';
import { DetailsSection } from '@/components/wedding/details-section';
import { DressCodeSection } from '@/components/wedding/dress-code-section';
import { GiftSection } from '@/components/wedding/gift-section';
import { ScheduleSection } from '@/components/wedding/schedule-section';

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

export function ClassicInvitation(props: TemplateProps) {
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
		<main className="theme-classic min-h-screen bg-background overflow-x-hidden">
			<ClassicHero
				bride={bride}
				groom={groom}
				displayDate={displayDate}
				mainMessage={mainMessage}
				heroBackground={photos.heroBackground}
				featuredPhoto={photos.left[0]}
			/>

			<DetailsSection ceremony={ceremony} reception={reception} />

			<ScheduleSection schedule={schedule} />

			<CountdownSection date={date} time={time} />

			<DressCodeSection
				enabled={dressCode.enabled}
				title={dressCode.title}
				code={dressCode.code}
				colors={dressCode.colors}
				colorNames={dressCode.colorNames}
				note={dressCode.note}
			/>

			<GiftSection
				enabled={giftRegistry.enabled}
				title={giftRegistry.title}
				message={giftRegistry.message}
				bankName={giftRegistry.bankName}
				accountHolder={giftRegistry.accountHolder}
				accountNumber={giftRegistry.accountNumber}
				clabe={giftRegistry.clabe}
			/>

			<ClassicRSVP title={rsvp.title} message={rsvp.message} deadline={rsvp.deadline} />
		</main>
	);
}
