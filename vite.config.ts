import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        ...configDefaults,
        environment: 'jsdom', // notwendig für React-Komponenten (DOM-Simulation)
        globals: true, // erlaubt expect(), describe(), etc. ohne Import
        setupFiles: './src/setupTests.ts', // optional: Setup-Datei
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            src: path.resolve(__dirname, 'src'),
        },
    },
});
