import ViteRestart from 'vite-plugin-restart';
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
    server: {
        host: '0.0.0.0',
        port: 3000
    }
});