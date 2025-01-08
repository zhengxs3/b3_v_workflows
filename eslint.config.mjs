import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

// @type {import('eslint').Linter.Config}
export default {
    files: ["**/*.js", "**/*.jsx"], // 确保包括 JSX 文件
    languageOptions: {
        sourceType: "commonjs", // 你使用的是 CommonJS 模块
        globals: { ...globals.browser, ...globals.node }, // 支持浏览器和 Node.js 全局变量
    },
    plugins: {
        js: pluginJs.configs.recommended,
        react: pluginReact.configs.recommended,
    },
    settings: {
        react: {
            version: "detect" // 自动检测 React 版本
        }
    }
};
