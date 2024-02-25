import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            { find: '@src', replacement: resolve(__dirname, 'src') },
            {
                find: '@components',
                replacement: resolve(__dirname, 'src/components'),
            },
        ],
    },
    base: './',
    plugins: [react(), tsconfigPaths(), svgr()],
});
