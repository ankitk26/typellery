import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";

interface PagePaginationProps {
	currentPage: number;
	totalPages: number;
	setCurrentPage: (page: number | ((prev: number) => number)) => void;
}

export default function PagePagination({
	currentPage,
	totalPages,
	setCurrentPage,
}: PagePaginationProps) {
	const buildPages = (): (number | string)[] => {
		if (totalPages <= 10) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		const windowStart = Math.max(2, currentPage - 4);
		const windowEnd = Math.min(totalPages - 1, windowStart + 9);

		const pages: (number | string)[] = [1];

		if (windowStart > 2) {
			pages.push("...");
		}

		for (let i = windowStart; i <= windowEnd; i++) {
			pages.push(i);
		}

		if (windowEnd < totalPages - 1) {
			pages.push("...");
		}

		pages.push(totalPages);

		return pages;
	};

	const pages = buildPages();

	return (
		<div className="flex items-center justify-center gap-1">
			<Button
				variant="ghost"
				size="icon"
				className="h-8 w-8 rounded-full text-primary"
				onClick={() =>
					setCurrentPage((p: number) => Math.max(1, p - 1))
				}
				disabled={currentPage === 1}
			>
				<HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
			</Button>

			<div className="flex gap-0.5">
				{pages.map((page, i) => {
					if (page === "...") {
						return (
							<span
								key={`ellipsis_${i}`}
								className="flex items-center px-1.5 text-xs text-muted-foreground"
							>
								...
							</span>
						);
					}

					const isCurrent = currentPage === page;
					return (
						<Button
							key={`pagination_page_${page}`}
							variant={isCurrent ? "default" : "ghost"}
							size="icon"
							className="h-8 w-8 rounded-full text-xs"
							onClick={() => setCurrentPage(page as number)}
						>
							{page}
						</Button>
					);
				})}
			</div>

			<Button
				variant="ghost"
				size="icon"
				className="h-8 w-8 rounded-full text-primary"
				onClick={() =>
					setCurrentPage((p: number) => Math.min(totalPages, p + 1))
				}
				disabled={currentPage === totalPages}
			>
				<HugeiconsIcon icon={ArrowRight01Icon} size={18} />
			</Button>
		</div>
	);
}
