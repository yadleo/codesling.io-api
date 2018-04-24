import { globalController } from '../../lib/components/';
import { sabotageQuery } from './sabotageQueries';

export const sabotageController = globalController(sabotageQuery, 'sabotageQuery');
