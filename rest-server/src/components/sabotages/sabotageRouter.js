import express from 'express';

import { sabotageController } from './sabotageControllers';

const router = express.Router();

router.route('/')
  .get(sabotageController)
  .post(sabotageController);

export default router;
