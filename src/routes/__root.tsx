import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "@/components/header";
import { TooltipProvider } from "@/components/ui/tooltip";

export const rootRoute = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<TooltipProvider>
			<div className="flex h-screen flex-col bg-background">
				<Header />
				<div className="mx-auto min-h-0 w-full max-w-[1400px] flex-1 overflow-y-auto px-4 py-4 pb-20 md:px-8 md:py-6 md:pb-24 lg:px-12">
					<Outlet />
				</div>
			</div>
		</TooltipProvider>
	);
}
