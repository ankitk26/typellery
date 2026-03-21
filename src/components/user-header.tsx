import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useImage } from "@/context/image-context";

export default function UserHeader() {
	const { current } = useImage();

	return (
		<a href={current?.user.links.html} target="_blank" rel="noreferrer">
			<Flex alignItems="center" gap={4}>
				<Avatar.Root>
					<Avatar.Image src={current?.user.profile_image.large} />
					<Avatar.Fallback>{current?.user.name?.[0]}</Avatar.Fallback>
				</Avatar.Root>
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
