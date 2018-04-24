export const fetchAllMessagesForUserHelper = `
    SELECT id, sender_id, receiver_id, content
    FROM messages
    WHERE sender_id=$1 AND receiver_id=$2
    LIMIT 50
`;

export const saveMessageHelper = `
  INSERT INTO messages (sender_id, receiver_id, content)
  VALUES ($1, $2, $3)
  RETURNING id, sender_id, receiver_id, content
`;
