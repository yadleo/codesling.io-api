export const addTestCaseHelper = `
  INSERT INTO 
    testCases (testcase, challenge_id)
  VALUES 
    ($1, $2)
  RETURNING
    id, testcase, challenge_id
`;

// throw this shit into the challenge fetfch
export const fetchAllTestCasesHelper = ({ challenge_id }) => {
  return `
    SELECT
      id, testcase, challenge_id
    FROM
      testCases
    WHERE
      challenge_id=${parseInt(challenge_id)}
  `;
};
