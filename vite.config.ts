import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

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
    plugins: [react(), tsconfigPaths()],
});
