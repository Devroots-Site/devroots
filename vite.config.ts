import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        ...configDefaults,
        globals: true,
        environment: 'jsdom', // importat for react components
        setupFiles: './src/setupTests.ts', // optinal
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            src: path.resolve(__dirname, 'src'),
        },
    },
});
