import { Box, ChakraProvider } from "@chakra-ui/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "@/components/header";
import { system } from "@/theme";

export const rootRoute = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<ChakraProvider value={system}>
			<Box minH="100vh" bg="#faf8f5">
				<Header />
				<Box
					flex="1"
					maxW="1400px"
					mx="auto"
					px={{ base: 4, md: 8, lg: 12 }}
					py={{ base: 6, md: 10 }}
				>
					<Outlet />
				</Box>
			</Box>
		</ChakraProvider>
	);
}
