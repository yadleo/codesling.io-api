import {
  addFriendQuery,
  removeFriendQuery,
  fetchAllFriendsQuery,
  friendQuery
} from './friendsQueries';
import {
  success,
  error
} from '../../lib/log';

export const friendController = async (req, res) => {
  const { url, method } = req;
  let payload;
  if (method === 'POST' || method === 'PUT') {
    payload = req.body;
  } else {
    payload = req.params;
  }
  try {
    const { rows } = await friendQuery(payload, url);
    success('friendController - sucessfully retrieved data ', JSON.stringify(rows[0]));
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('friendController - error= ', err);
  }
};
