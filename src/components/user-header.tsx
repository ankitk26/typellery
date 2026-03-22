import { Camera01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserHeaderProps {
	image: Image;
}

export default function UserHeader({ image }: UserHeaderProps) {
	return (
		<a
			href={image.user.links.html}
			target="_blank"
			rel="noreferrer"
			className="block transition-opacity hover:opacity-80"
		>
			<div className="flex items-center gap-3.5">
				<Avatar className="h-12 w-12 shrink-0">
					<AvatarImage src={image.user.profile_image.large} />
					<AvatarFallback className="text-lg font-medium">
						{image.user.name?.[0]}
					</AvatarFallback>
				</Avatar>
				<div>
					<p className="text-base font-semibold text-foreground">
						{image.user.name}
					</p>
					<div className="flex items-center gap-1 text-muted-foreground">
						<HugeiconsIcon
							icon={Camera01Icon}
							size={13}
							className="shrink-0"
						/>
						<span className="text-xs">@{image.user.username}</span>
					</div>
				</div>
			</div>
		</a>
	);
}
