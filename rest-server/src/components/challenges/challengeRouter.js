import express from 'express';

import {
  addChallengeController
} from './challengeControllers';

const router = express.Router();

router.route('/')
  .post(addChallengeController);

export default router;
