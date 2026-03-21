import { SearchIcon } from "@heroicons/react/outline";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useImage } from "@/context/ImageContext";

export default function SearchForm() {
	const { fetchSearchResults, setSearch, search } = useImage();

	const handleSearch = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetchSearchResults();
	};

	return (
		<form onSubmit={handleSubmit}>
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					children={<Icon as={SearchIcon} color="gray.300" />}
				/>
				<Input
					value={search}
					onChange={handleSearch}
					color="white"
					_placeholder={{ color: "gray.400" }}
					placeholder="Search images"
				/>
			</InputGroup>
		</form>
	);
}
