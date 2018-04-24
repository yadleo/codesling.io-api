import { globalController } from '../../lib/components/';
import { userChallengeQuery } from './usersChallengesQueries';

export const userChallengeController = globalController(userChallengeQuery, 'userChallengeController')
