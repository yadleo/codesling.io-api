import { globalController } from '../../lib/components/';
import { testCaseQuery } from './testCasesQuery';

export const testCaseController = globalController(testCaseQuery, 'testCaseController');
