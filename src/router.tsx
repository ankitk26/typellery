import { createRoute, createRouter } from "@tanstack/react-router";
import { rootRoute } from "@/routes/__root";
import Main from "@/routes/index";
import ImageDetails from "@/routes/image.$id";

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Main,
});

const imageRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/image/$id",
	component: ImageDetails,
});

const routeTree = rootRoute.addChildren([indexRoute, imageRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
