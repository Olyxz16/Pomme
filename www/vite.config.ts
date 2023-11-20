import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


/** @type {import('vite').Plugin} */
const viteServerConfig = {
    name: 'log-request-middleware',
    configureServer(server: { middlewares: { use: (arg0: (req: any, res: { setHeader: (arg0: string, arg1: string) => void; }, next: () => void) => void) => void; }; }) {
        server.middlewares.use((req: any, res: { setHeader: (arg0: string, arg1: string) => void; }, next: () => void) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "*");
            res.setHeader("Access-Control-Allow-Headers", "*");            
            next();
        });
    }
};



export default defineConfig({
	plugins: [sveltekit(), viteServerConfig],
});
