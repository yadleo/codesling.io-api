export const addSabotageHelper = 
  `
    INSERT INTO sabotages
      (content, type, history_id)
    VALUES
      ($1, $2, $3)
    RETURNING
      id, content, history_id
  `;

export const fetchAllSabotagesHelper = 
  `
    SELECT
      id, content, type
    FROM
      sabotages
  `;
