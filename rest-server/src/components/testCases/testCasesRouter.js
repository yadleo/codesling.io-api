import express from 'express';

import { testCaseController } from './testCasesControllers';

const router = express.Router();

router.route('/')
  .post(testCaseController);

router.route('/:challenge_id')
  .get(testCaseController);

export default router;
