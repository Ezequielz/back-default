import { Router } from 'express';
import { AuthRouter } from './auth/AuthRouter';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/auth', AuthRouter() );
 
    return router;
  }


}