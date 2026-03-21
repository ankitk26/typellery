import { createRoute, createRouter } from "@tanstack/react-router";
import { rootRoute } from "@/routes/__root";
import ImageDetails from "@/routes/images.$id";
import Main from "@/routes/index";

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	validateSearch: (search: Record<string, unknown>) => ({
		search: (search.search as string) || "",
		page: Number(search.page) || 1,
	}),
	component: Main,
});

const imageRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/images/$id",
	component: ImageDetails,
});

const routeTree = rootRoute.addChildren([indexRoute, imageRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
