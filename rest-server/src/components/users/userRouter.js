import express from 'express';

import {
  userController
} from './userControllers';

const router = express.Router();

router.route('/')
  .get(userController);

router.route('/:user_id')
  .put(userController);

export default router;
