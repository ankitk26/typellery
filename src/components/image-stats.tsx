import {
	Download01Icon,
	ViewIcon,
	FavouriteIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface ImageStatsProps {
	image: Image;
}

export default function ImageStats({ image }: ImageStatsProps) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-3">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
					<HugeiconsIcon
						icon={FavouriteIcon}
						size={20}
						className="text-primary"
						strokeWidth={2}
					/>
				</div>
				<div className="flex flex-col gap-0.5">
					<p className="text-sm leading-none font-semibold text-foreground">
						{image.likes.toLocaleString()}
					</p>
					<span className="text-[10px] text-muted-foreground">
						Likes
					</span>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
					<HugeiconsIcon
						icon={ViewIcon}
						size={20}
						className="text-primary"
						strokeWidth={2}
					/>
				</div>
				<div className="flex flex-col gap-0.5">
					<p className="text-sm leading-none font-semibold text-foreground">
						{image.views?.toLocaleString() ?? "\u2014"}
					</p>
					<span className="text-[10px] text-muted-foreground">
						Views
					</span>
				</div>
			</div>

			<a
				href={image.links.download}
				target="_blank"
				rel="noreferrer"
				className="flex items-center gap-3 rounded-lg transition-colors hover:bg-primary/5"
			>
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
					<HugeiconsIcon
						icon={Download01Icon}
						size={20}
						className="text-primary-foreground"
						strokeWidth={2}
					/>
				</div>
				<div className="flex flex-col gap-0.5">
					<p className="text-sm leading-none font-semibold text-foreground">
						{image.downloads?.toLocaleString() ?? "\u2014"}
					</p>
					<span className="text-[10px] text-muted-foreground">
						Download
					</span>
				</div>
			</a>
		</div>
	);
}
