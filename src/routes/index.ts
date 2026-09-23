import { Router } from 'express';

import authRoutes from './auth.routes';
import taskRoutes from './task.routes';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/tasks', taskRoutes);

export default routes;
