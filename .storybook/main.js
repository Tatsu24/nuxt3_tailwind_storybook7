/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const AutoImport = require("unplugin-auto-import/vite");
const AutoImportComponents = require("unplugin-vue-components/vite");
const config = {
  stories: [
    "../*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../layouts/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    if (config.plugins !== undefined) {
      config.plugins.push(
        AutoImport({ imports: ["vue"], dts: ".storybook/auto-imports.d.ts" })
      );
      config.plugins.push(
        AutoImportComponents({
          dirs: ["components"],
          directoryAsNamespace: false, // trueの場合ディレクトリ名もコンポーネント名に含む
          dts: ".storybook/components.d.ts",
        })
      );
    }
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
    };
  },
};
export default config;
