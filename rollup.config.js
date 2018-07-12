/**
 * (Note that Rollup itself processes the config file,
 * which is why we're able to use export default syntax – the code
 * isn't being transpiled with Babel or anything similar,
 * so you can only use ES2015 features that are supported in
 * the version of Node.js that you're running.)
 */

import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs"; //  convert CommonJS to ES2015 before Rollup can process them

import url from "rollup-plugin-url";
import svg from "rollup-plugin-svg";
import { argv } from "yargs";

const component = argv["gel-component"];
const pkg = require(`./packages/${component}/package.json`);
export default {
  input: `./packages/${component}/src/index.jsx`,
  plugins: [babel()],
  output: [
    {
      file: `./packages/${component}/${pkg.main}`,
      format: "cjs"
    },
    {
      file: `./packages/${component}/${pkg.module}`,
      format: "es"
    }
  ]
};
