import { Box, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
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
			{search && (
				<Box mb={8} className="animate-fade-in">
					<p className="label">Results for</p>
					<Heading
						as="h2"
						fontSize={{ base: "2xl", md: "3xl" }}
						fontWeight={600}
						className="text-heading"
						fontStyle="italic"
					>
						&ldquo;{search}&rdquo;
					</Heading>
				</Box>
			)}

			<PagePagination
				currentPage={page}
				totalPages={totalPages}
				setCurrentPage={setCurrentPage}
			/>

			{isLoading ? (
				<Flex
					justifyContent="center"
					alignItems="center"
					minH="50vh"
					className="animate-fade-in"
				>
					<Spinner size="lg" color="#0d9488" />
				</Flex>
			) : (
				<>
					{images.length === 0 ? (
						<Flex
							justifyContent="center"
							alignItems="center"
							minH="40vh"
							flexDirection="column"
							gap={4}
						>
							<Text
								className="text-heading"
								fontSize="2xl"
								fontStyle="italic"
							>
								No images found
							</Text>
							<p
								className="text-muted"
								style={{ fontSize: "0.875rem" }}
							>
								Try a different search term
							</p>
						</Flex>
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
				</>
			)}
		</Box>
	);
}
