import { globalQueryHelper } from '../../lib/components';
import {
  fetchAllUserHelper,
  editUserClout
} from './userSQLHelpers';

export const userQuery = async (payload, url) => {
  if (url === '/') {
    return await globalQueryHelper(payload, fetchAllUserHelper, 'fetchAllUserHelper', []);
  } else {
    return await globalQueryHelper(payload, editUserClout(payload), 'editUserClout');
  }
};
