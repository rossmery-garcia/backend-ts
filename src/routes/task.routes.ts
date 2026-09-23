import { Router } from 'express';

import TaskController from '../controllers/task.controller';

const router = Router();

router.post('/', TaskController.create);
router.get('/', TaskController.findAll);
router.get('/:id', TaskController.findById);

export default router;
