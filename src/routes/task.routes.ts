import { Router } from 'express';

import TaskController from '../controllers/task.controller';

const router = Router();

router.post('/', TaskController.create);
router.get('/', TaskController.findAll);
router.get('/:id', TaskController.findById);
router.patch('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);

export default router;
