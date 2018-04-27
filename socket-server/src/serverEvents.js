const { funcNameReplace } = require('./lib/funcNameReplace');

/**
 *
 *  Server emissions
 *
 */
export const serverInitialState = ({ client, room }, { challenge, player }) => {

  if (!room.get('challenge')) {
    const newStarterText = funcNameReplace(room.get('playerOne.text'), challenge.fn);
    room.set('playerOne.text', newStarterText);
    room.set('playerTwo.text', newStarterText);
    
    room.set('challenge', challenge);


    if(!room.get('playerOne') || room.get('playerOne').id !== player.id) {
      room.set('playerOne', player);
    }

    client.emit('server.initialState', {
      id: client.id,
      playerOneText: room.get('playerOne.text'),
      playerTwoText: room.get('playerTwo.text'),
      challenge,
    });
  } else {
    if ( !room.get('playerTwo') || room.get('playerTwo').id !== player.id) {
      room.set('playerTwo', player);
    }

    client.emit('server.initialState', {
      id: client.id,
      playerOneText: room.get('playerOne.text'),
      playerTwoText: room.get('playerTwo.text'),
      challenge: room.get('challenge'),
    });
    if (room.get('hasWinner')) {
      client.emit('server.submit', room.get('hasWinner'));
    }
  }
};

export const clientOneServerChanged = ({ io, room, player }) => {
  const roomId = room.get('id');
  const text = room.get('playerOne.text');
  io
    .in(roomId)
    .emit('serverOne.changed', { text, player });
};

export const clientTwoServerChanged = ({ io, room, player }) => {
  const roomId = room.get('id');
  const text = room.get('playerTwo.text');
  io
    .in(roomId)
    .emit('serverTwo.changed', { text, player });
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

export const serverSubmit = ({ io, room }, { player, pass, expected, got, opponent }) => {
  if (pass) {
    room.set('hasWinner', { player, pass, expected, got, opponent });
  }

  io
    .in(room.get('id'))
    .emit('server.submit', { player, pass, expected, got, opponent });
};

export const serverMessage = ({ io, room }, message) => {
  io
    .in(room.get('id'))
    .emit('server.message', message);
};
