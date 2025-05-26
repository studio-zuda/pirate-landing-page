import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        },
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                @use '@/assets/styles/mixins' as *;
                @use '@/assets/styles/variables' as *;
                `,
                silenceDeprecations: [
                    'import',
                    'mixed-decls',
                    'color-functions',
                    'global-builtin',
                ],
            },
        },
    },
});