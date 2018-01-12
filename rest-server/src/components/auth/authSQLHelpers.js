export const signUpHelper = ({ email, username, password }) => {
  return `
    INSERT INTO users (email, username, password, clout, kdr)
    VALUES ('${email}', '${username}', '${password}', 0, 0)
    RETURNING id, email
  `;
};

export const loginHelper = ({ email }) => {
  return `
    SELECT id, email, username, password, clout, kdr
    FROM users
    WHERE email='${email}'
  `;
};
