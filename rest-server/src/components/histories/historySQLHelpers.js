export const addHistoryHelper = `
    INSERT INTO histories
      (outcome, time, clout, user_id, challenger_id, challenge_id)
    VALUES
      ($1, $2, $3, $4, $5, $6)
    RETURNING
      id, outcome, time, clout, user_id, challenger_id, challenge_id
  `;

export const fetchAllHistoryHelper = `
  SELECT
    id, outcome, time, clout, user_id, challenger_id, challenge_id
  FROM
    histories
  WHERE
    user_id=$1
`;
