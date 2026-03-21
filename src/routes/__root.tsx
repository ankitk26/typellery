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
			<Header />
			<Box w="80%" mx="auto" textAlign="center" marginTop={8}>
				<Outlet />
			</Box>
		</ChakraProvider>
	);
}
