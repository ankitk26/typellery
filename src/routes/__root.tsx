import { Box, ChakraProvider } from "@chakra-ui/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import ImageProvider from "../context/ImageContext";
import { theme } from "../theme";

export const rootRoute = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<ChakraProvider theme={theme}>
			<ImageProvider>
				<Header />
				<Box w="80%" mx="auto" textAlign="center" marginTop={8}>
					<Outlet />
				</Box>
			</ImageProvider>
		</ChakraProvider>
	);
}
