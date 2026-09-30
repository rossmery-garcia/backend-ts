import { Router } from 'express';

import TaskController from '../controllers/task.controller';

import AuthenticationMiddleware from '../middlewares/authentication.middleware';

import ValidationMiddleware from '../middlewares/validation.middleware';

import { createTaskSchema, updateTaskSchema, taskIdParamSchema } from '../schemas/task.schemas';

const router = Router();

router.use(AuthenticationMiddleware.authenticate);

router.post(
  '/',
  ValidationMiddleware.validate({
    body: createTaskSchema,
  }),
  TaskController.create,
);
router.get('/', TaskController.findAll);
router.get(
  '/:id',
  ValidationMiddleware.validate({
    params: taskIdParamSchema,
  }),
  TaskController.findById,
);
router.patch(
  '/:id',
  ValidationMiddleware.validate({
    params: taskIdParamSchema,
    body: updateTaskSchema,
  }),
  TaskController.update,
);
router.delete(
  '/:id',
  ValidationMiddleware.validate({
    params: taskIdParamSchema,
  }),
  TaskController.delete,
);

export default router;
