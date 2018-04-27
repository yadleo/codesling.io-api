import { globalQueryHelper } from '../../lib/components';
import {
  fetchAllUserHelper,
  fetchUserHelper,
  editUserClout
} from './userSQLHelpers';

export const userQuery = async (payload, url) => {
  if (url === '/') {
    return await globalQueryHelper(payload, fetchAllUserHelper, 'fetchAllUserHelper', []);
  } else {
    if (payload.newClout) {
      return await globalQueryHelper(payload, editUserClout(payload), 'editUserClout');
    } else {
      return await globalQueryHelper(payload, fetchUserHelper(payload), 'fetchUserHelper');
    }
  }
};
