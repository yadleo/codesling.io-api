import express from 'express';

import { historyController } from './historyController';

const router = express.Router();

router.route('/addHistory')
  .post(historyController)

router.route('/:user_id')
  .get(historyController)

export default router;
