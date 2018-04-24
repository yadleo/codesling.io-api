export const addUserChallengeHelper = `
  INSERT INTO
    usersChallenges (user_id, challenge_id, type)
  VALUES
    ($1, $2, $3)
  RETURNING
    id, user_id, challenge_id, type
`;

export const fetchAllUserChallengesHelper = `
  SELECT
    uc.id, uc.challenge_id, uc.user_id, uc.type
  FROM
    usersChallenges AS uc
  WHERE
    uc.user_id=$1
`;
