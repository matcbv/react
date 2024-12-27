import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { version } from "react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  // Configurações para o conjunto em files:
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",a
    }
  },
  // Configurações globais:
  {
    languageOptions: { 
      globals: {...globals.browser, ...globals.node, ...globals.jest} 
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: version,
      }
    }
  }
];
