import {
  addFriendQuery,
  removeFriendQuery,
  fetchAllFriendsQuery
} from './friendsQueries';
import {
  success,
  error
} from '../../lib/log';

export const addFriendController = async (req, res) => {
  try {
    const data = await addFriendQuery(req.body);
    success('addFriendController - successfully added friend ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('addFriendController - error= ', err);
  }
};

export const removeFriendController = async (req, res) => {
  try {
    const data = await removeFriendQuery(req.params);
    success('removeFriendController - succesfully removed friend ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('removeFriendController - error= ', err);
  }
};

export const fetchAllFriendsController = async (req, res) => {
  try {
    const data = await fetchAllFriendsQuery(req.params.user_id);
    success('fetchAllFriendsController - successfully retrieved data ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('fetchAllFriendsController - error= ', err);
  }
};
