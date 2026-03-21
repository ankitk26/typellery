import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	fmt: {
		ignorePatterns: [],
		useTabs: true,
		tabWidth: 4,
		printWidth: 80,
		sortImports: {
			newlinesBetween: false,
		},
	},
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
