import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";
import ImagesGrid from "@/components/images-grid";
import PagePagination from "@/components/page-pagination";
import { fetchPhotos, fetchSearch } from "@/lib/api";

export default function Main() {
	const { search, page } = useSearch({ from: "/" });
	const navigate = useNavigate({ from: "/" });

	const { data, isLoading } = useQuery({
		queryKey: search
			? ["images", "search", search, page]
			: ["images", page],
		queryFn: () => (search ? fetchSearch(search, page) : fetchPhotos(page)),
	});

	const images = data?.results ?? [];
	const totalPages =
		images.length === 0 && !isLoading ? page - 1 : (data?.total_pages ?? 0);

	const setCurrentPage = (p: number | ((prev: number) => number)) => {
		const newPage = typeof p === "function" ? p(page) : p;
		navigate({
			search: (prev: { search: string; page: number }) => ({
				...prev,
				page: newPage,
			}),
		});
	};

	return (
		<div>
			{search && (
				<div className="mb-8">
					<p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
						Results for
					</p>
					<h2 className="font-heading text-2xl font-semibold text-foreground italic md:text-3xl">
						&ldquo;{search}&rdquo;
					</h2>
				</div>
			)}

			{images.length > 0 && (
				<div className="mb-8">
					<PagePagination
						currentPage={page}
						totalPages={totalPages}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			)}

			{isLoading ? (
				<div className="flex min-h-[50vh] items-center justify-center">
					<div className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-primary" />
				</div>
			) : (
				<>
					{images.length === 0 ? (
						<div className="flex min-h-[40vh] flex-col items-center justify-center gap-3">
							<p className="font-heading text-2xl text-muted-foreground italic">
								No images found
							</p>
							<p className="text-sm text-muted-foreground">
								Try a different search term
							</p>
						</div>
					) : (
						<>
							<ImagesGrid images={images} />
							<div className="mt-12">
								<PagePagination
									currentPage={page}
									totalPages={totalPages}
									setCurrentPage={setCurrentPage}
								/>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
}
