import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from "rollup-plugin-terser";
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import autoExternal from 'rollup-plugin-auto-external';
import bundleSize from 'rollup-plugin-bundle-size'

const lib = require("./package.json");
const outputFileName = 'axios';
const name = "axios";
const entryPoint = './index.js';
const UMDEntryPoint = './lib/axios.js';

const buildConfig = ({es5, browser = true, minifiedVersion = true, ...config}) => {

  const build = ({minified}) => ({
    input: entryPoint,
    ...config,
    output: {
      ...config.output,
      file: `${config.output.file}.${minified ? "min.js" : "js"}`
    },
    plugins: [
      json(),
      resolve({browser}),
      commonjs(),
      minified && terser(),
      minified && bundleSize(),
      ...(es5 ? [babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env']
      })] : []),
      ...(config.plugins || []),
    ]
  });

  const configs = [
    build({minified: false}),
  ];

  if (minifiedVersion) {
    configs.push(build({minified: true}))
  }

  return configs;
};

export default async () => {
  const year = new Date().getFullYear();
  const banner = `// Axios v${lib.version} Copyright (c) ${year} ${lib.author} and contributors`;

  return [
    ...buildConfig({
      input: UMDEntryPoint,
      es5: true,
      output: {
        file: `dist/${outputFileName}`,
        name,
        format: "umd",
        exports: "named",
        banner
      }
    }),

    ...buildConfig({
      output: {
        file: `dist/esm/${outputFileName}`,
        format: "esm",
        preferConst: true,
        exports: "named",
        banner
      }
    }),
    // Node.js commonjs build
    {
      input: entryPoint,
      output: {
        file: `dist/node/${name}.cjs`,
        format: "cjs",
        preferConst: true,
        exports: "named",
        banner
      },
      plugins: [
        autoExternal(),
        resolve(),
        commonjs()
      ]
    }
  ]
};
