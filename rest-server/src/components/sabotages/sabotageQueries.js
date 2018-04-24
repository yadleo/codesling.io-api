import { globalQueryHelper } from '../../lib/components/';
import { 
  addSabotageHelper,
  fetchAllSabotagesHelper
 } from './sabotageSQLHelpers';

export const sabotageQuery = async (payload, url) => {
  if (url === '/') {
    return await globalQueryHelper(payload, addSabotageHelper, 'addSabotageHelper', ['content', 'type', 'history_id']);
  } else {
    return await globalQueryHelper(payload, fetchAllSabotagesHelper, 'fetchAllSabotagesHelper');
  }
};
