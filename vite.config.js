// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/lionsbasketball/', // ✅ GitHub Pages Subpfad
    plugins: [react()],
});