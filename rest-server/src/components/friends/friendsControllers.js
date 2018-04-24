import { globalController } from '../../lib/components/';
import { friendQuery } from './friendsQueries';

export const friendController = globalController(friendQuery, 'friendController');
