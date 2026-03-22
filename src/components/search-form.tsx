import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function SearchForm() {
	const navigate = useNavigate();
	const [value, setValue] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate({ to: "/", search: { search: value, page: 1 } });
	};

	return (
		<form onSubmit={handleSubmit} className="relative">
			<HugeiconsIcon
				icon={Search01Icon}
				size={16}
				className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground transition-colors peer-focus:text-primary"
			/>
			<Input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search images..."
				className="peer h-9 w-[180px] rounded-full pl-9 text-sm md:w-[280px]"
			/>
		</form>
	);
}
