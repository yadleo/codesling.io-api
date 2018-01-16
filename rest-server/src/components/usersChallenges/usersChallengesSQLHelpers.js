export const addUserChallengeHelper = ({ user_id, challenge_id, type }) => {
  return `
    INSERT INTO usersChallenges (user_id, challenge_id, type)
    VALUES (${user_id}, ${challenge_id}, ${type})
  `;
};

export const fetchAllUserChallengesHelper = ({ user_id }) => {
  return `
    SELECT c.id, c.title, c.content, c.difficulty, c.rating
    FROM challenges AS c
      INNER JOIN usersChallenges AS uc
      ON (c.id=uc.challenge_id)
      WHERE (uc.user_id=${user_id})
  `;
};
