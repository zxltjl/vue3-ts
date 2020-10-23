import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

const isProduction = process.env.NODE_ENV === 'production';
console.log(222);

module.exports = {
    base: "/start-vue3/",
    assetsDir: "",
    publicPath: isProduction ? './' : './',
    alias: {
        "@": pathResolve("src"),
    },
    optimizeDeps: {
        include: ["@ant-design/icons-vue"],
    },
};