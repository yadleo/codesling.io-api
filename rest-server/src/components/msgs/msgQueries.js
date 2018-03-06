import db from '../../config/database';
import { globalQueryHelper } from '../../lib/components/globals';
import {
  fetchAllMessagesForUserHelper,
  saveMessageHelper
} from './msgSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const fetchMessageQuery = async (payload) => {
  try {
    const queryString = fetchAllMessagesForUserHelper(payload);
    const data = await db.queryAsync(queryString);
    success('successfully fetched all the messages');
    return data;
  } catch (err) {
    error('error fetching the messages. err= ', err);
  }
}

export const msgQuery = async (payload, url) => {
  if (url === '/') {
    return await globalQueryHelper(payload, saveMessageHelper, 'saveMessageQuery');
  }
};
