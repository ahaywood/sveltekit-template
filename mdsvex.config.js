import relativeImages from "mdsvex-relative-images";
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.md', '.svx'],
  smartypants: { dashes: 'oldschool' },
  "remarkPlugins": [relativeImages],
  "rehypePlugins": []
});

export default config;
