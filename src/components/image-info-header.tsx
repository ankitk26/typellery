import { Flex } from "@chakra-ui/react";
import ImageStats from "@/components/image-stats";
import UserHeader from "@/components/user-header";

export default function ImageInfoHeader() {
	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			flexDirection={{ base: "column", md: "row" }}
			gap={8}
		>
			<UserHeader />
			<ImageStats />
		</Flex>
	);
}
