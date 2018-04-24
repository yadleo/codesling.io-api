import express from 'express';

import { userChallengeController } from './usersChallengesControllers';

const router = express.Router();

router.route('/')
  .post(userChallengeController);

router.route('/:user_id')
  .get(userChallengeController);

export default router;
