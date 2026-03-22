import ImageStats from "@/components/image-stats";
import UserHeader from "@/components/user-header";

interface ImageInfoHeaderProps {
	image: Image;
}

export default function ImageInfoHeader({ image }: ImageInfoHeaderProps) {
	return (
		<div className="flex flex-col items-center gap-4 rounded-xl border border-border/50 bg-card p-5">
			<UserHeader image={image} />
			<ImageStats image={image} />
		</div>
	);
}
