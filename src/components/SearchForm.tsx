import { Input } from "@chakra-ui/react";
import { RiSearchLine } from "@remixicon/react";
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
		<form onSubmit={handleSubmit} style={{ position: "relative" }}>
			<span
				style={{
					position: "absolute",
					left: "12px",
					top: "50%",
					transform: "translateY(-50%)",
					display: "flex",
					alignItems: "center",
					pointerEvents: "none",
				}}
			>
				<RiSearchLine size={16} color="gray" />
			</span>
			<Input
				value={search}
				onChange={handleSearch}
				color="white"
				placeholder="Search images"
				ps="2.25em"
			/>
		</form>
	);
}
