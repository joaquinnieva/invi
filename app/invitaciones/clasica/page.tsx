import { ClassicInvitation } from "@/components/templates/ClassicInvitation";
import { weddingConfig } from "@/lib/wedding-config";

type PageProps = {
	params: { template: string };
};

export default function InvitationTemplatePage({ params }: PageProps) {
	return <ClassicInvitation {...weddingConfig} />;
}
