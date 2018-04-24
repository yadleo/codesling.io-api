import express from 'express';

import { testCaseController } from './testCasesControllers';

const router = express.Router();

router.route('/')
  .post(testCaseController);

export default router;
