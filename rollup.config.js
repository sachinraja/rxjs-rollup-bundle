import { defineConfig } from "rollup"
import nodeResolve from "@rollup/plugin-node-resolve"
import visualizer from "rollup-plugin-visualizer"
// minify
// import { terser } from "rollup-plugin-terser";

export default defineConfig({
  input: 'index.js',
  output: {
    file: 'out.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve({
      // exportConditions: ['es2015'],
    }),
    // terser(),
    process.env.VISUALIZE && visualizer()
  ]
})
