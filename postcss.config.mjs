import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  plugins: {
    // Handle @import statements with ~ prefix (JupyterLab convention)
    "postcss-import": {
      resolve: (id, basedir) => {
        // Strip ~ prefix and resolve from node_modules
        if (id.startsWith('~')) {
          const modulePath = id.slice(1);
          return resolve(__dirname, 'node_modules', modulePath);
        }
        return id;
      },
    },
    "@tailwindcss/postcss": {},
  },
};

export default config;
