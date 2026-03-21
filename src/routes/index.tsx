import { Box, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import ImagesGrid from "@/components/images-grid";
import PagePagination from "@/components/page-pagination";
import { useImage } from "@/context/image-context";

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
