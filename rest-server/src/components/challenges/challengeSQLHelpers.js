export const addChallengeHelper = ({ content, difficulty }) => {
  return `
    INSERT INTO challenges (content, difficulty, rating)
    VALUES ('${content}', ${difficulty}, 0)
    RETURNING id, content, difficulty
  `;
}
