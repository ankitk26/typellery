import {
	Pagination,
	PaginationContainer,
	PaginationNext,
	PaginationPage,
	PaginationPageGroup,
	PaginationPrevious,
	usePagination,
} from "@ajna/pagination";
import { Icon } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useImage } from "@/context/ImageContext";

export default function PagePagination() {
	const { currentPage, totalPages, setCurrentPage } = useImage();

	const { pagesCount, pages } = usePagination({
		pagesCount: totalPages ? (totalPages > 10 ? 10 : totalPages) : 10,
		initialState: { currentPage },
	});

	return (
		<Pagination
			pagesCount={pagesCount}
			currentPage={currentPage}
			onPageChange={setCurrentPage}
		>
			<PaginationContainer
				mb={8}
				alignItems="center"
				justifyContent="center"
			>
				<PaginationPrevious>
					<Icon as={ChevronLeftIcon} />
				</PaginationPrevious>
				<PaginationPageGroup mx={4} gap={2}>
					{pages.map((page) => {
						const isCurrent = currentPage === page;
						return (
							<PaginationPage
								w={4}
								h={4}
								p={4}
								rounded="full"
								color={isCurrent ? "white" : "teal.600"}
								border={isCurrent ? "2px" : "1px"}
								borderColor="teal.600"
								fontSize="sm"
								key={`pagination_page_${page}`}
								bg={isCurrent ? "teal.600" : "transparent"}
								page={page}
								onClick={() => setCurrentPage(page)}
							/>
						);
					})}
				</PaginationPageGroup>
				<PaginationNext>
					<Icon as={ChevronRightIcon} />
				</PaginationNext>
			</PaginationContainer>
		</Pagination>
	);
}
