import { Input } from "@chakra-ui/react";
import { RiSearchLine } from "@remixicon/react";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export default function SearchForm() {
	const navigate = useNavigate();
	const [value, setValue] = useState("");
	const [focused, setFocused] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate({ to: "/", search: { search: value, page: 1 } });
	};

	return (
		<form onSubmit={handleSubmit} style={{ position: "relative" }}>
			<span
				style={{
					position: "absolute",
					left: "14px",
					top: "50%",
					transform: "translateY(-50%)",
					display: "flex",
					alignItems: "center",
					pointerEvents: "none",
					transition: "color 0.3s ease",
					color: focused ? "#14b8a6" : "rgba(255,255,255,0.4)",
				}}
			>
				<RiSearchLine size={16} />
			</span>
			<Input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				color="white"
				placeholder="Search images..."
				ps="2.5em"
				fontSize="sm"
				border="1px solid rgba(255,255,255,0.15)"
				borderRadius="full"
				bg="rgba(255,255,255,0.07)"
				h="40px"
				w={{ base: "180px", md: "280px" }}
				_placeholder={{ color: "rgba(255,255,255,0.35)" }}
				_hover={{
					borderColor: "rgba(255,255,255,0.3)",
					bg: "rgba(255,255,255,0.1)",
				}}
				_focus={{
					borderColor: "#14b8a6",
					bg: "rgba(255,255,255,0.12)",
					boxShadow: "0 0 0 1px rgba(20,184,166,0.3)",
				}}
				transition="all 0.3s ease"
			/>
		</form>
	);
}
