import { globalQueryHelper } from '../../lib/components/';
import {
  addHistoryHelper,
  fetchAllHistoryHelper
} from './historySQLHelpers';

export const historyQuery = async (payload, url) => {
  if (url === '/addHistory') {
    return await globalQueryHelper(payload, addHistoryHelper, 'addHistoryHelper', ['outcome', 'time', 'clout', 'user_id', 'challenger_id', 'challenge_id'])
  } else {
    return await globalQueryHelper(payload, fetchAllHistoryHelper, 'fetchAllHistoryHelper', ['user_id'])
  }
}
