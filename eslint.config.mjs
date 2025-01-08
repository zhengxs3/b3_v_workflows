import globals from "globals";
import pluginJs from "@eslint/js";

export default {
  files: ["**/*.js"], // 检查所有 .js 文件
  languageOptions: {
    sourceType: "commonjs", // 如果项目使用 CommonJS 模块（require/exports）
    globals: { ...globals.browser, ...globals.node }, // 浏览器和 Node 环境全局变量
  },
  plugins: {
    js: pluginJs.configs.recommended, // 使用 ESLint 推荐的 JS 配置
  },
  rules: {
    "no-unused-vars": "warn", // 未使用变量提示为警告
    "no-console": "off", // 允许使用 console
  },
};
