import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
    base: '/web2025/project/', // ← 꼭 이대로 설정
    plugins: [react()],
});
