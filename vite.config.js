// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/lionsbasketball/', // ⬅️ Passe das an den Namen deines GitHub-Repos an!
    plugins: [react()],
});