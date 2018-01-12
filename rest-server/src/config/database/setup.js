import {
  createDatabase,
  createUserTable,
  createChallengeTable,
  createHistoryTable,
  createTestCaseTable,
  // createSabotageTable,
  createFriendTable,
  dropDatabase,
  dropUserTable,
  dropChallengeTable,
  dropHistoryTable,
  dropTestCaseTable,
  // dropSabotageTable,
  dropFriendTable,
  useDatabase,
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();
  await dropDatabase();
  await dropHistoryTable();
  await dropTestCaseTable();
  await dropFriendTable();
  await dropUserTable();
  await dropChallengeTable();
  // await dropSabotageTable();
  await createDatabase();
  await createUserTable();
  await createChallengeTable();
  await createHistoryTable();
  await createTestCaseTable();
  await createFriendTable();
  // await createSabotageTable();
};

setup();
