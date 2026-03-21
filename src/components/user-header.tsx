import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface UserHeaderProps {
	image: Image;
}

export default function UserHeader({ image }: UserHeaderProps) {
	return (
		<a href={image.user.links.html} target="_blank" rel="noreferrer">
			<Flex alignItems="center" gap={4}>
				<Avatar.Root>
					<Avatar.Image src={image.user.profile_image.large} />
					<Avatar.Fallback>{image.user.name?.[0]}</Avatar.Fallback>
				</Avatar.Root>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
				>
					<Text fontSize="lg">{image.user.name}</Text>
					<Text fontSize="md" color="gray.500">
						@{image.user.username}
					</Text>
				</Box>
			</Flex>
		</a>
	);
}
