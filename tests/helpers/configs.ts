import path from "path";

import type { Linter } from "eslint";

export const filename = path.join(__dirname, "file.ts");

const typescriptParser = "@typescript-eslint/parser";
const babelParser = typescriptParser; // Switch to "babel-eslint" once https://github.com/babel/babel/issues/13712 is fixed;
const espreeParser = "espree";

export const configs = {
  typescript: {
    parser: require.resolve(typescriptParser),
    parserOptions: {
      sourceType: "module",
      project: path.join(__dirname, "./test-tsconfig.json"),
    },
  } as Linter.Config,

  es11: {
    parser: require.resolve(babelParser),
    parserOptions: {
      ecmaVersion: 11,
    },
  } as Linter.Config,

  es10: {
    parser: require.resolve(babelParser),
    parserOptions: {
      ecmaVersion: 10,
    },
  } as Linter.Config,

  es9: {
    parser: require.resolve(babelParser),
    parserOptions: {
      ecmaVersion: 9,
    },
  } as Linter.Config,

  es8: {
    parser: require.resolve(babelParser),
    parserOptions: {
      ecmaVersion: 8,
    },
  } as Linter.Config,

  es7: {
    parser: require.resolve(babelParser),
    parserOptions: {
      ecmaVersion: 7,
    },
  } as Linter.Config,

  es6: {
    parser: require.resolve(babelParser),
    parserOptions: {
      ecmaVersion: 6,
    },
  } as Linter.Config,

  es5: {
    parser: require.resolve(espreeParser),
    parserOptions: {
      ecmaVersion: 5,
    },
  } as Linter.Config,

  es3: {
    parser: require.resolve(espreeParser),
    parserOptions: {
      ecmaVersion: 3,
    },
  } as Linter.Config,
};
