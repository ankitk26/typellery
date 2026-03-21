import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import SearchForm from "@/components/search-form";

export default function Header() {
	return (
		<Flex
			bg="teal.600"
			py={4}
			px={8}
			alignItems="center"
			justifyContent="space-between"
		>
			<Link to="/">
				<Heading color="white">Typellary</Heading>
			</Link>

			<div>
				<SearchForm />
			</div>
		</Flex>
	);
}
