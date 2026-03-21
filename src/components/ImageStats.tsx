import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { RiDownloadFill, RiEyeFill, RiHeartFill } from "@remixicon/react";
import { useImage } from "@/context/ImageContext";

export default function ImageStats() {
	const { current } = useImage();

	return (
		<Flex
			border="1px"
			rounded="md"
			borderColor="gray.300"
			alignItems="center"
			justifyContent="center"
			gap={4}
			px={8}
			mb={{ base: 8, md: 0 }}
		>
			<Stack alignItems="center" justifyContent="center" p={2}>
				<Icon as={RiHeartFill} color="teal.600" fontSize="xl" />
				<Text color="teal.600" fontSize="md">
					{current?.likes.toLocaleString()}
				</Text>
			</Stack>

			<Stack alignItems="center" justifyContent="center" p={2}>
				<Icon as={RiEyeFill} color="teal.600" fontSize="xl" />
				<Text color="teal.600" fontSize="md">
					{current?.views?.toLocaleString()}
				</Text>
			</Stack>

			<a href={current?.links.self} target="_blank" rel="noreferrer">
				<Stack alignItems="center" justifyContent="center" p={2}>
					<Icon as={RiDownloadFill} color="teal.600" fontSize="xl" />
					<Text color="teal.600" fontSize="md">
						{current?.downloads?.toLocaleString()}
					</Text>
				</Stack>
			</a>
		</Flex>
	);
}
