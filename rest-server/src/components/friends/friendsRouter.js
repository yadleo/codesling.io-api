import express from 'express';

import { friendController } from './friendsControllers';

const router = express.Router();

router.route('/addFriend')
  .post(friendController);

router.route('/:user_id')
  .get(friendController);

router.route('/deleteFriend/:user_id/:friend_id')
  .delete(friendController);

export default router;
