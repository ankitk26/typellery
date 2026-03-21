import { Flex } from "@chakra-ui/react";
import ImageStats from "./ImageStats";
import UserHeader from "./UserHeader";

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
