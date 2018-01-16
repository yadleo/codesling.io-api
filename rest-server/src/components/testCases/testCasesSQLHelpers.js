export const addTestCaseHelper = ({ content, challenge_id }) => {
  return `
    INSERT INTO testCases (content, challenge_id)
    VALUES ('${content}', ${challenge_id})
  `;
};
