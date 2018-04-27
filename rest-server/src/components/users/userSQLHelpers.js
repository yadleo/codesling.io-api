export const fetchAllUserHelper = `
  SELECT
    id, email, username, password, clout, kdr
  FROM
    users
`;

// not used currently
export const fetchUserHelper = ({ user_id }) => {
  return `
  SELECT
    id, email, username, password, clout, kdr
  FROM
    users
  WHERE
    id=${user_id}
`;
}

export const editUserClout = ({ user_id, newClout }) => {
  return `
  UPDATE
    users
  SET
    clout = clout + ${parseInt(newClout)}
  WHERE
    id=${user_id}
`;
}