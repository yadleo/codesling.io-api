import express from 'express';

import {
  addTestCaseController
} from './testCasesControllers';

const router = express.Router();

router.route('/')
  .post(addTestCaseController);

export default router;
