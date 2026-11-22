import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { redact } from "@tanstack/redact/vite";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").at(-1);

export default defineConfig({
    base: "/",
    plugins: [
        react(),
        redact({
            preset: "nano",
        }),
    ],
    optimizeDeps: {
        exclude: ["@run-slicer/cfr"],
    },
});
