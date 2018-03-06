import express from 'express';

import {
  historyController,
  fetchHistoryController
} from './historyController';

const router = express.Router();

router.route('/addHistory')
  .post(historyController)

router.route('/fetchAllHistory/:user_id')
  .get(fetchHistoryController)

export default router;
