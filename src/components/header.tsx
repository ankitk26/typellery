import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import SearchForm from "@/components/search-form";

export default function Header() {
	return (
		<Box
			bg="#0d7377"
			position="sticky"
			top={0}
			zIndex={100}
			borderBottom="1px solid rgba(255,255,255,0.08)"
		>
			<Flex
				maxW="1400px"
				mx="auto"
				py={{ base: 4, md: 5 }}
				px={{ base: 4, md: 8, lg: 12 }}
				alignItems="center"
				justifyContent="space-between"
			>
				<Link to="/" search={{ search: "", page: 1 }}>
					<Flex alignItems="baseline" gap={3}>
						<Heading
							as="h1"
							fontSize={{ base: "xl", md: "2xl" }}
							fontWeight={600}
							color="white"
							letterSpacing="-0.02em"
							_hover={{ opacity: 0.9 }}
							transition="opacity 0.3s ease"
						>
							Typellery
						</Heading>
					</Flex>
				</Link>
				<SearchForm />
			</Flex>
		</Box>
	);
}
