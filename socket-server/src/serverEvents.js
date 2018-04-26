/**
 *
 *  Server emissions
 *
 */
export const serverInitialState = ({ client, room }, { challenge }) => {
  if (!room.get('challenge')) {
    room.set('challenge', challenge);
    client.emit('server.initialState', {
      id: client.id,
      playerOneText: room.get('playerOne.text'),
      playerTwoText: room.get('playerTwo.text'),
      challenge,
    });
  } else {
    client.emit('server.initialState', {
      id: client.id,
      playerOneText: room.get('playerOne.text'),
      playerTwoText: room.get('playerTwo.text'),
      challenge: room.get('challenge'),
    });
  }
};

export const clientOneServerChanged = ({ io, room }) => {
  const roomId = room.get('id');
  const text = room.get('playerOne.text');
  io
    .in(roomId)
    .emit('serverOne.changed', { text, player: 1 });
};

export const clientTwoServerChanged = ({ io, room }) => {
  const roomId = room.get('id');
  const text = room.get('playerTwo.text');
  io
    .in(roomId)
    .emit('serverTwo.changed', { text, player: 2 });
};

export const serverLeave = ({ io, room }) => {
  io
    .in(room.get('id'))
    .emit('server.leave');
};

export const serverRun = ({ io, room }, { stdout, player }) => {
  io
    .in(room.get('id'))
    .emit('server.run', { stdout, player });
};

export const serverSubmit = ({ io, room }, { player, pass, expected, got }) => {
  io
    .in(room.get('id'))
    .emit('server.submit', { player, pass, expected, got });
};

export const serverMessage = ({ io, room }, message) => {
  io
    .in(room.get('id'))
    .emit('server.message', message);
};
