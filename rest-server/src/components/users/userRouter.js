import express from 'express';

import {
  fetchAllUserController
} from './userControllers';

const router = express.Router();

router.route('/fetchAllUsers')
  .get(fetchAllUserController);

export default router;
