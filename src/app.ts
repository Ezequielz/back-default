import { envs } from './config/envs';
import { createServer } from './presentation/server';
import { AppRoutes } from './presentation/routes';

function main() {
    const server = createServer({
        port: envs.PORT,
        routes: AppRoutes.routes,
    });

    // Retorna el objeto para poder cerrar el servidor si es necesario
    return server;
}

(async () => {
    main()
})()