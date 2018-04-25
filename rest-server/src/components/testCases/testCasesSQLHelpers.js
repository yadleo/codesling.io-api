export const addTestCaseHelper = `
  INSERT INTO 
    testCases (testcode, challenge_id)
  VALUES 
    ($1, $2)
  RETURNING
    id, testcode, challenge_id
`;

// throw this shit into the challenge fetfch
export const fetchAllTestCasesHelper = ({ challenge_id }) => {
  return `
    SELECT
      id, testcode, challenge_id
    FROM
      testCases
    WHERE
      challenge_id=${challenge_id}
  `;
};
