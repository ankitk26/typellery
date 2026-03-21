import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageInfoHeader from "../components/ImageInfoHeader";
import { useImage } from "../context/ImageContext";

export default function ImageDetails() {
	const params = useParams();
	const id = params.id;

	const { current, loading, clearCurrent, fetchImageById } = useImage();

	useEffect(() => {
		if (id) {
			fetchImageById(id);
		}
		return () => {
			clearCurrent();
		};
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Spinner size="md" />;
	}

	return (
		<Box mb={5}>
			<ImageInfoHeader />
			<Flex justifyContent="center" my={8}>
				<Image src={current?.urls.small} alt={current?.id} />
			</Flex>
			<Box mt={2} />
			<Text fontSize="lg" color="gray.600">
				{current?.description}
			</Text>
		</Box>
	);
}
