import { globalQueryHelper } from '../../lib/components/';
import {
  addUserChallengeHelper,
  fetchAllUserChallengesHelper
} from './usersChallengesSQLHelpers';

export const userChallengeQuery = async (payload, url) => {
  if (url === '/') {
    return await globalQueryHelper(payload, addUserChallengeHelper, 'addUserChallengeQuery', ['user_id', 'challenge_id', 'type']);
  } else {
    return await globalQueryHelper(payload, fetchAllUserChallengesHelper(payload), 'fetchAllUserChallengesQuery');
  }
};