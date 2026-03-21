import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ImageProvider from "./context/ImageContext";
import ImageDetails from "./pages/ImageDetails";
import Main from "./pages/Main";
import { theme } from "./theme";

export default function App() {
	return (
		<ChakraProvider theme={theme}>
			<ImageProvider>
				<Router>
					<Header />
					<Box w="80%" mx="auto" textAlign="center" marginTop={8}>
						<Routes>
							<Route path="/" element={<Main />} />
							<Route
								path="/image/:id"
								element={<ImageDetails />}
							/>
						</Routes>
					</Box>
				</Router>
			</ImageProvider>
		</ChakraProvider>
	);
}
