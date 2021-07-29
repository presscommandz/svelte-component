import svelte from "rollup-plugin-svelte"
import resolve from "@rollup/plugin-node-resolve"
import alias from "@rollup/plugin-alias"
import pkg from "./package.json"
import autoPreprocess from "svelte-preprocess"
import typescript from "@rollup/plugin-typescript"
import image from "@rollup/plugin-image"
import css from "rollup-plugin-css-only"

const name = pkg.name
    .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
    .replace(/^\w/, m => m.toUpperCase())
    .replace(/-\w/g, m => m[1].toUpperCase())

export default {
    input: "src/index.ts",
    output: [
        { file: pkg.module, format: "esm", name, sourcemap: true },
        { file: pkg.main, format: "cjs", name, sourcemap: true }
    ],
    plugins: [
        svelte({
            preprocess: autoPreprocess()
        }),
        css({ output: "bundle.css" }),
        typescript(),
        resolve(),
        alias({
            resolve: [".js", ".ts", ".svelte"],
            entries: {
                "@Promotion": "src/Promotion",
                "@resources": "src/resources"
            }
        }),
        image()
    ]
}
