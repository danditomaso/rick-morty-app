import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
/// <reference types="vitest" />
export default defineConfig({
	plugins: [react()],
	test: {
		name: "happy-dom",
		environment: "happy-dom",
		// setupFiles: ["./setup.happy-dom.ts"],
	},
});
