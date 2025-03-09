import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    swc: {
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true
        },
        transform: {
          react: {
            pragma: 'h',
            pragmaFrag: 'Fragment',
            importSource: "vue",
            runtime: "classic"
          }
        }
      }
    }
  }
});
