import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
    base: "/qvai-landing-page/",
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), ghPages()],
});
