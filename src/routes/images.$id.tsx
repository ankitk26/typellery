import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import ImageStats from "@/components/image-stats";
import UserHeader from "@/components/user-header";
import { fetchPhotoById } from "@/lib/api";

export default function ImageDetails() {
	const { id } = useParams({ from: "/images/$id" });
	const { data: current, isLoading } = useQuery({
		queryKey: ["image", id],
		queryFn: () => fetchPhotoById(id),
	});

	if (isLoading || !current) {
		return (
			<div className="flex h-full items-center justify-center">
				<div className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-primary" />
			</div>
		);
	}

	return (
		<div className="flex h-full flex-col overflow-hidden">
			<button
				type="button"
				onClick={() => window.history.back()}
				className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-all hover:-translate-x-1 hover:text-primary"
			>
				<HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
				Back to gallery
			</button>

			<div className="flex min-h-0 flex-1 flex-col gap-6 md:flex-row">
				<div className="min-h-0 min-w-0 flex-1 overflow-hidden rounded-xl border border-border/50 bg-card p-2 shadow-xl shadow-black/5">
					<img
						src={current.urls.regular}
						alt={current.description || current.id}
						className="block h-full w-full rounded-lg object-contain"
					/>
				</div>

				<div className="flex w-full shrink-0 flex-col gap-4 overflow-auto md:w-[300px]">
					<div className="rounded-xl border border-border/50 bg-card p-5">
						<UserHeader image={current} />
					</div>

					<div className="rounded-xl border border-border/50 bg-card p-5">
						<ImageStats image={current} />
					</div>

					{current.description && (
						<div className="rounded-xl border border-border/50 bg-card p-5">
							<p className="mb-3 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
								Description
							</p>
							<p className="text-sm leading-relaxed text-foreground/80">
								{current.description}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
