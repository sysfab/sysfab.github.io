import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").at(-1);

export default defineConfig({
    base: "/",
    plugins: [react()],
    optimizeDeps: {
        exclude: ["@run-slicer/cfr"],
    },
});
