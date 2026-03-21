import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

interface IProps {
	image: Image;
}

export default function ImageItem({ image }: IProps) {
	return (
		<Link to="/image/$id" params={{ id: image.id }}>
			<Box p={2} border="1px" borderColor="gray.200" rounded="md">
				<Image
					src={image.urls.small}
					alt={`item-${image.id}`}
					maxWidth="100%"
					objectFit="contain"
				/>
				<Flex alignItems="center" justifyContent="center" p={2} gap={2}>
					<Avatar
						src={image.user.profile_image.large}
						// alt={image.user.username}
					/>
					<Text fontSize="md">{image.user.name}</Text>
				</Flex>
			</Box>
		</Link>
	);
}
