import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "@/components/header";
import { system } from "@/theme";

export const rootRoute = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<ChakraProvider value={system}>
			<Flex flexDir="column" h="100vh" bg="#faf8f5">
				<Header />
				<Box
					flex="1"
					minH={0}
					maxW="1400px"
					w="full"
					mx="auto"
					px={{ base: 4, md: 8, lg: 12 }}
					py={{ base: 4, md: 6 }}
				>
					<Outlet />
				</Box>
			</Flex>
		</ChakraProvider>
	);
}
