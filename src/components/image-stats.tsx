import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { RiDownloadFill, RiEyeFill, RiHeartFill } from "@remixicon/react";

interface ImageStatsProps {
	image: Image;
}

export default function ImageStats({ image }: ImageStatsProps) {
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
					{image.likes.toLocaleString()}
				</Text>
			</Stack>

			<Stack alignItems="center" justifyContent="center" p={2}>
				<Icon as={RiEyeFill} color="teal.600" fontSize="xl" />
				<Text color="teal.600" fontSize="md">
					{image.views?.toLocaleString()}
				</Text>
			</Stack>

			<a href={image.links.self} target="_blank" rel="noreferrer">
				<Stack alignItems="center" justifyContent="center" p={2}>
					<Icon as={RiDownloadFill} color="teal.600" fontSize="xl" />
					<Text color="teal.600" fontSize="md">
						{image.downloads?.toLocaleString()}
					</Text>
				</Stack>
			</a>
		</Flex>
	);
}
