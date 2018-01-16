import express from 'express';

import {
  addUserChallengeController,
  fetchAllUserChallengesController
} from './usersChallengesControllers';

const router = express.Router();

router.route('/')
  .post(addUserChallengeController);

router.route('/:user_id')
  .get(fetchAllUserChallengesController);

export default router;
