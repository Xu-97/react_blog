const path = require("path");
const CracoLessPlugin = require("craco-less");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
    plugins: [
      new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {
            drop_console: process.env.NODE_ENV === "production", // 生产环境下移除控制台所有的内容
            drop_debugger: false, // 移除断点
            pure_funcs:
              process.env.NODE_ENV === "production" ? ["console.log"] : "", // 生产环境下移除console
          },
        },
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#425aef" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
