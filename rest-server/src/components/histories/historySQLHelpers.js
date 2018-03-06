export const addHistoryHelper = ({ outcome, time, clout, user_id, challenger_id, challenge_id }) => {
  return `
    INSERT INTO histories (outcome, time, clout, user_id, challenger_id, challenge_id)
    VALUES (${outcome}, '${time}', ${clout}, ${user_id}, ${challenger_id}, ${challenge_id})
    RETURNING id, outcome, time, clout, user_id, challenger_id, challenge_id
  `
};

export const fetchAllHistoryHelper = ({ user_id }) => {
  return `
    SELECT id, outcome, time, clout, user_id, challenger_id, challenge_id
    FROM histories
    WHERE user_id=${user_id}
  `
};
