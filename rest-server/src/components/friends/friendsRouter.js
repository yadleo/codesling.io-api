import express from 'express';

import {
  addFriendController,
  removeFriendController,
  fetchAllFriendsController
} from './friendsControllers';

const router = express.Router();

router.route('/addFriend')
  .post(addFriendController);

router.route('/fetchAllFriends/:user_id/')
  .get(fetchAllFriendsController);

router.route('/deleteFriend/:user_id/:friend_id')
  .delete(removeFriendController);

export default router;
