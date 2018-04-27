export const addUserChallengeHelper = `
  INSERT INTO
    usersChallenges (user_id, challenge_id, type)
  VALUES
    ($1, $2, $3)
  RETURNING
    id, user_id, challenge_id, type
`;

export const fetchAllUserChallengesHelper = ({ user_id }) => {
  return `
  SELECT
    uc.challenge_id, uc.user_id, uc.type, c.title, c.content, c.difficulty, c.rating, c.fn
  FROM
    usersChallenges AS uc
  FULL OUTER JOIN
    challenges as c
  ON
    c.id=uc.challenge_id
  WHERE
    uc.user_id=${parseInt(user_id)}
  `;
};