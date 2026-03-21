import { Box, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import ImagesGrid from "@/components/ImagesGrid";
import PagePagination from "@/components/PagePagination";
import { useImage } from "@/context/ImageContext";

export default function Main() {
	const {
		totalPages,
		fetchImages,
		currentPage,
		loading,
		fetchSearchResults,
	} = useImage();

	useEffect(() => {
		if (totalPages === 0) {
			fetchImages();
			return;
		}
		fetchSearchResults();
		// eslint-disable-next-line
	}, [currentPage, totalPages]);

	return (
		<Box>
			<PagePagination />
			{loading ? (
				<Spinner size="md" />
			) : (
				<>
					<ImagesGrid />
					<PagePagination />
				</>
			)}
		</Box>
	);
}
