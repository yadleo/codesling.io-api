export const addFriendHelper = `
  INSERT INTO friends (user_id, friend_id)
  VALUES ($1, $2)
  RETURNING id, user_id, friend_id
`;

export const removeFriendHelper = `
  DELETE FROM friends
  WHERE user_id=$1 AND friend_id=$2
  RETURNING id, user_id, friend_id
`;

export const fetchAllFriendsHelper = `
  SELECT
    u.id, u.email, u.username, u.clout, u.kdr
  FROM
    users AS u
  INNER JOIN
    friends AS f
  ON
    (u.id=f.friend_id)
  WHERE
    f.user_id=$1
`;
