import { Link } from "@tanstack/react-router";
import SearchForm from "@/components/search-form";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-primary/20 bg-primary/5">
			<div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3.5 md:px-8 lg:px-12">
				<Link to="/" search={{ search: "", page: 1 }}>
					<h1 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
						Typellery
					</h1>
				</Link>
				<SearchForm />
			</div>
		</header>
	);
}
