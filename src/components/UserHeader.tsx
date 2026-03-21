import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useImage } from "@/context/ImageContext";

export default function UserHeader() {
	const { current } = useImage();

	return (
		<a href={current?.user.links.html} target="_blank" rel="noreferrer">
			<Flex alignItems="center" gap={4}>
				<Avatar
					src={current?.user.profile_image.large}
					// alt={current?.user.name}
				/>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
				>
					<Text fontSize="lg">{current?.user.name}</Text>
					<Text fontSize="md" color="gray.500">
						@{current?.user.username}
					</Text>
				</Box>
			</Flex>
		</a>
	);
}
