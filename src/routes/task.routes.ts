import { Router } from 'express';

import TaskController from '../controllers/task.controller';

import AuthenticationMiddleware from '../middlewares/authentication.middleware';

const router = Router();

router.post('/', TaskController.create);
router.get('/', AuthenticationMiddleware.authenticate, TaskController.findAll);
router.get('/:id', TaskController.findById);
router.patch('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);

export default router;
