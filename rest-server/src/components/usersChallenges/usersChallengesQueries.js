import db from '../../config/database';

import {
  addUserChallengeHelper,
  fetchAllUserChallengesHelper
} from './usersChallengesSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const addUserChallengeQuery = async (body) => {
  try {
    const queryString = addUserChallengeHelper(body);
    const data = await db.queryAsync(queryString);
    success('addUserChallengeQuery - successfully added userChallenge ', data);
    return data;
  } catch (err) {
    error('addUserChallengeQuery - error= ', err);
  }
};

export const fetchAllUserChallengesQuery = async (params) => {
  try {
    const queryString = fetchAllUserChallengesHelper(params);
    const data = await db.queryAsync(queryString);
    success('fetchAllUserChallengesQuery - successfully fetched all user challenges ', data);
    return data;
  } catch (err) {
    error('fetchAllUserChallengesQuery - error= ', err);
  }
};
