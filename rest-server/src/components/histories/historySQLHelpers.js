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
    h.id, h.outcome, h.time, h.clout, h.user_id, u.username as challenger_name, h.challenge_id
  FROM
    histories as h
  FULL OUTER JOIN
    users as u
  ON
    h.challenger_id=u.id
  WHERE
    user_id=$1
`;