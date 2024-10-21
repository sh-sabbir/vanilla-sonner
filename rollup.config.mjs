import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import postcssMinify from "postcss-minify";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: {
      name: "VanillaSooner",
      file: `dist/${pkg.name}.umd.js`,
      format: "umd",
      extend: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
  {
    input: "src/index.js",
    output: [
      { file: `dist/${pkg.name}.cjs.js`, format: "cjs" },
      { file: `dist/${pkg.name}.esm.js`, format: "es" },
    ],
    plugins: [
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
  {
    input: "src/styles.css",
    output: {
      file: `dist/${pkg.name}.css`,
      format: "es",
    },
    plugins: [
      postcss({
        plugins: [postcssMinify()],
        modules: true,
        extract: true,
      }),
    ],
  },
];
