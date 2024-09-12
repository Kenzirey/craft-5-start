import ViteRestart from 'vite-plugin-restart';
import path from 'path';
export default ({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        manifest: true,
        outDir: 'web/dist/',
        rollupOptions: {
            input: {
                app: 'src/js/app.js',
            }
        },
    },
    plugins: [
        ViteRestart({
            reload: [
                'templates/**/*',
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@css': path.resolve(__dirname, 'src/css'),
            '@js': path.resolve(__dirname, 'src/js'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000
    }
});