import db from '../../config/database';
import {
  addFriendHelper,
  removeFriendHelper,
  fetchAllFriendsHelper
} from './friendsSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const friendQueryHelper = async (payload, query) => {
  try {
    const queryString = query(payload);
    const data = await db.queryAsync(queryString);
    success('friendQueryHelper - successfully retrived data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('friendQueryHelper - error= ', err);
    throw new Error(err);
  }
};

export const friendQuery = async (payload, url) => {
  if (url === '/addFriend') {
    return await friendQueryHelper(payload, addFriendHelper);
  } else if (url.includes('/deleteFriend')) {
    return await friendQueryHelper(payload, removeFriendHelper);
  } else {
    return await friendQueryHelper(payload, fetchAllFriendsHelper);
  }
};
