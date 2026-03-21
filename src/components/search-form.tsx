import { Input } from "@chakra-ui/react";
import { RiSearchLine } from "@remixicon/react";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export default function SearchForm() {
	const navigate = useNavigate();
	const [value, setValue] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate({
			to: "/",
			search: { search: value, page: 1 },
		});
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
				value={value}
				onChange={(e) => setValue(e.target.value)}
				color="white"
				placeholder="Search images"
				ps="2.25em"
			/>
		</form>
	);
}
