import { globalQueryHelper } from '../../lib/components/';
import {
  addFriendHelper,
  removeFriendHelper,
  fetchAllFriendsHelper
} from './friendsSQLHelpers';

export const friendQuery = async (payload, url) => {
  if (url === '/addFriend') {
    return await globalQueryHelper(payload, addFriendHelper, 'addFriendQuery', ['user_id', 'friend_id']);
  } else if (url.includes('/deleteFriend')) {
    return await globalQueryHelper(payload, removeFriendHelper, 'deleteFriendQuery', ['user_id', 'friend_id']);
  } else {
    return await globalQueryHelper(payload, fetchAllFriendsHelper, 'fetchAllFriendQuery', ['user_id']);
  }
};
