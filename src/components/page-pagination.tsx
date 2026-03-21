import { Button, Flex, Text } from "@chakra-ui/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

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
	const pagesCount = totalPages ? (totalPages > 10 ? 10 : totalPages) : 10;
	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

	return (
		<Flex
			mb={8}
			alignItems="center"
			justifyContent="center"
			gap={1}
			className="animate-fade-in"
		>
			<Button
				size="sm"
				variant="ghost"
				onClick={() =>
					setCurrentPage((p: number) => Math.max(1, p - 1))
				}
				disabled={currentPage === 1}
				color="#0d9488"
				borderRadius="full"
				_hover={{ bg: "#e8f4f2" }}
				_disabled={{ color: "#94a8b0", cursor: "not-allowed" }}
				transition="all 0.2s ease"
			>
				<RiArrowLeftSLine size={20} />
			</Button>

			<Flex gap={1}>
				{pages.map((page) => {
					const isCurrent = currentPage === page;
					return (
						<Button
							key={`pagination_page_${page}`}
							size="sm"
							w={8}
							h={8}
							minW={8}
							rounded="full"
							fontSize="xs"
							fontWeight={isCurrent ? 600 : 400}
							bg={isCurrent ? "#0d7377" : "transparent"}
							color={isCurrent ? "white" : "#3d5a66"}
							border="1px solid"
							borderColor={isCurrent ? "#0d7377" : "transparent"}
							onClick={() => setCurrentPage(page)}
							_hover={{
								bg: isCurrent ? "#0b6666" : "#e8f4f2",
								borderColor: isCurrent ? "#0b6666" : "#b0d4d1",
							}}
							transition="all 0.25s ease"
						>
							{page}
						</Button>
					);
				})}
			</Flex>

			<Button
				size="sm"
				variant="ghost"
				onClick={() =>
					setCurrentPage((p: number) => Math.min(pagesCount, p + 1))
				}
				disabled={currentPage === pagesCount}
				color="#0d9488"
				borderRadius="full"
				_hover={{ bg: "#e8f4f2" }}
				_disabled={{ color: "#94a8b0", cursor: "not-allowed" }}
				transition="all 0.2s ease"
			>
				<RiArrowRightSLine size={20} />
			</Button>

			{totalPages > 0 && (
				<Text
					fontSize="xs"
					className="text-muted"
					ml={3}
					display={{ base: "none", md: "block" }}
				>
					{currentPage} of {pagesCount}
				</Text>
			)}
		</Flex>
	);
}
