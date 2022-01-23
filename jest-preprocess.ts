/* eslint @typescript-eslint/no-var-requires: "off" */
const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
};

module.exports = require("babel-jest").createTransformer(babelOptions);
