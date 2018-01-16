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

export const addFriendQuery = async (body) => {
  try {
    const queryString = addFriendHelper(body);
    const data = await db.queryAsync(queryString);
    success('addFriendQuery - successfully retrieved data ', data);
    return data;
  } catch (err) {
    error('addFriendQuery - error= ', err);
    throw new Error(err);
  }
};

export const removeFriendQuery = async (params) => {
  try {
    const queryString = removeFriendHelper(params);
    const data = await db.queryAsync(queryString);
    success('removeFriendQuery - successfully removed friend ', data);
    return data;
  } catch (err) {
    error('removeFriendQuery - error= ', err);
    throw new Error(err);
  }
};

export const fetchAllFriendsQuery = async (params) => {
  try {
    const queryString = fetchAllFriendsHelper(params);
    const data = await db.queryAsync(queryString);
    success('fetchAllFriendsQuery - successfully retrived data ', data);
    return data;
  } catch (err) {
    error('fetchAllFriendsQuery - error= ', err);
    throw new Error(err);
  }
};
