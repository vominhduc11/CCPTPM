import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    base: '/', // Cấu hình base nếu deploy trên subfolder thì thay đổi giá trị này
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
});
