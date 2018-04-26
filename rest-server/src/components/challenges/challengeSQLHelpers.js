export const addChallengeHelper = `
  INSERT INTO 
    challenges (title, content, difficulty, rating, fn)
  VALUES 
    ($1, $2, $3, 0, $4)
  RETURNING 
    id, title, content, difficulty, fn
`;

export const fetchChallengeHelper = `
  SELECT id, title, content, difficulty, rating, fn 
  FROM challenges`;
