import { Flex } from "@chakra-ui/react";
import ImageStats from "@/components/image-stats";
import UserHeader from "@/components/user-header";

interface ImageInfoHeaderProps {
	image: Image;
}

export default function ImageInfoHeader({ image }: ImageInfoHeaderProps) {
	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			flexDirection={{ base: "column", md: "row" }}
			gap={8}
		>
			<UserHeader image={image} />
			<ImageStats image={image} />
		</Flex>
	);
}
