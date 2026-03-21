import { Box, Spinner } from "@chakra-ui/react";
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
	const totalPages = data?.total_pages ?? 0;

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
		<Box>
			<PagePagination
				currentPage={page}
				totalPages={totalPages}
				setCurrentPage={setCurrentPage}
			/>
			{isLoading ? (
				<Spinner size="md" />
			) : (
				<>
					<ImagesGrid images={images} />
					<PagePagination
						currentPage={page}
						totalPages={totalPages}
						setCurrentPage={setCurrentPage}
					/>
				</>
			)}
		</Box>
	);
}
