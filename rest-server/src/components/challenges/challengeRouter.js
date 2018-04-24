import express from 'express';

import {
  challengeController
} from './challengeControllers';

const router = express.Router();

router.route('/')
  .get(challengeController);

router.route('/addChallenge')
  .post(challengeController);

export default router;
