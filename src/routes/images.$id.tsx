import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import ImageInfoHeader from "@/components/image-info-header";
import { fetchPhotoById } from "@/lib/api";

export default function ImageDetails() {
	const { id } = useParams({ from: "/images/$id" });

	const { data: current, isLoading } = useQuery({
		queryKey: ["image", id],
		queryFn: () => fetchPhotoById(id),
	});

	if (isLoading || !current) {
		return <Spinner size="md" />;
	}

	return (
		<Box mb={5}>
			<ImageInfoHeader image={current} />
			<Flex justifyContent="center" my={8}>
				<Image src={current.urls.small} alt={current.id} />
			</Flex>
			<Box mt={2} />
			<Text fontSize="lg" color="gray.600">
				{current.description}
			</Text>
		</Box>
	);
}
