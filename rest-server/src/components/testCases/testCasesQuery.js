import { globalQueryHelper } from '../../lib/components/';
import {
  addTestCaseHelper,
  fetchAllTestCasesHelper
} from './testCasesSQLHelpers';

export const testCaseQuery = async (payload, url) => {
  console.log('here payload: ',payload)
  if (url === '/') {
    return await globalQueryHelper(payload, addTestCaseHelper, 'addTestCaseHelper', ['testcode', 'challenge_id']);
  } else {
    return await globalQueryHelper(payload, fetchAllTestCasesHelper, 'fetchAllTestCasesHelper');
  }
};
