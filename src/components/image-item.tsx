import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

interface IProps {
	image: Image;
	index?: number;
}

export default function ImageItem({ image, index = 0 }: IProps) {
	const [loaded, setLoaded] = useState(false);

	return (
		<Link to="/images/$id" params={{ id: image.id }} className="block">
			<div
				className="group relative overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:border-border hover:shadow-xl"
				style={{ animationDelay: `${(index % 7) * 0.06}s` }}
			>
				{!loaded && <Skeleton className="absolute inset-0 z-10" />}
				<img
					src={image.urls.regular}
					alt={image.description || `Photo by ${image.user.name}`}
					className="block w-full object-cover"
					onLoad={() => setLoaded(true)}
					style={{ opacity: loaded ? 1 : 0 }}
				/>
				<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent px-3 pt-10 pb-2.5">
					<div className="flex items-center gap-2">
						<Avatar className="h-6 w-6">
							<AvatarImage src={image.user.profile_image.large} />
							<AvatarFallback className="text-[10px] font-medium">
								{image.user.name[0]}
							</AvatarFallback>
						</Avatar>
						<span className="truncate text-xs font-medium text-white/90">
							{image.user.name}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
