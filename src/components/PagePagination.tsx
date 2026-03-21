import { Button, Flex } from "@chakra-ui/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { useImage } from "@/context/ImageContext";

export default function PagePagination() {
	const { currentPage, totalPages, setCurrentPage } = useImage();

	const pagesCount = totalPages ? (totalPages > 10 ? 10 : totalPages) : 10;
	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

	return (
		<Flex mb={8} alignItems="center" justifyContent="center" gap={2}>
			<Button
				size="sm"
				variant="ghost"
				onClick={() => setCurrentPage((p: number) => Math.max(1, p - 1))}
				disabled={currentPage === 1}
			>
				<RiArrowLeftSLine size={18} />
			</Button>

			{pages.map((page) => {
				const isCurrent = currentPage === page;
				return (
					<Button
						key={`pagination_page_${page}`}
						size="sm"
						w={8}
						h={8}
						rounded="full"
						color={isCurrent ? "white" : "teal.600"}
						border={isCurrent ? "2px" : "1px"}
						borderColor="teal.600"
						fontSize="sm"
						bg={isCurrent ? "teal.600" : "transparent"}
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</Button>
				);
			})}

			<Button
				size="sm"
				variant="ghost"
				onClick={() =>
					setCurrentPage((p: number) => Math.min(pagesCount, p + 1))
				}
				disabled={currentPage === pagesCount}
			>
				<RiArrowRightSLine size={18} />
			</Button>
		</Flex>
	);
}
