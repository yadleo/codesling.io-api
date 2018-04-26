import axios from 'axios';

import { success } from './lib/log';
import {
  serverInitialState,
  clientOneServerChanged,
  clientTwoServerChanged,
  serverLeave,
  serverRun,
  serverSubmit,
  serverMessage,
} from './serverEvents';

/**
 *
 *  Client emissions (server listeners)
 *
 *  more on socket emissions:
 *  @url {https://socket.io/docs/emit-cheatsheet/}
 *
 *  @param room is an ES6 Map, containing { id, state }
 *  @url {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map}
 *
 */
const clientReady = ({ io, client, room }, payload) => {
  success('client ready heard');
  serverInitialState({ io, client, room }, payload);
};

const clientOneUpdate = ({ io, client, room }, payload) => {
  const { text, player } = payload;
  success('client update heard. payload.text = ', payload);
  room.set('playerOne.text', text);
  clientOneServerChanged({ io, client, room, player });
};

const clientTwoUpdate = ({ io, client, room }, payload) => {
  const { text, player } = payload;
  success('client update heard. payload.text = ', payload);
  room.set('playerTwo.text', text);
  clientTwoServerChanged({ io, client, room, player });
};

const clientDisconnect = ({ io, room }) => {
  success('client disconnected');
  serverLeave({ io, room });
};

const clientRun = async ({ io, room }, payload) => {
  success('running code from client. room.get("text") = ', room.get('text'));
  const { text, player } = payload;
  const url = process.env.CODERUNNER_SERVICE_URL;

  try {
    const { data } = await axios.post(`${url}/submit-code`, { code: text });
    const stdout = data;
    serverRun({ io, room }, { stdout, player });
  } catch (e) {
    success('error posting to coderunner service from socket server. e = ', e);
  }
};

const clientSubmit = async ({ io, room }, payload) => {
  success('submitting code from client. room.get("text") = ', room.get('text'));
  const { text, player } = payload;
  const service_url = process.env.CODERUNNER_SERVICE_URL;
  const rest_url = process.env.REST_SERVER_URL;
  const challenge = room.get('challenge');

  // query db thru rest-server for testCases
  const { data } = await axios.get(`${rest_url}/api/testCases/${challenge.id}`);
  const testCases = data;

  let allTestsPass = true;

  for (let i = 0; i < testCases.length; i++) {
    let test;
    const testCase = JSON.parse(testCases[i].testcase);

    // Add function invocation with input from testCase.input
    test = text + `;\n${challenge.fn}(${testCase.input});`;

    try {
      const { data } = await axios.post(`${service_url}/submit-code`, { code: test });

      if (data.result !== testCase.output) {
        allTestsPass = false;
        const socketEmitNotPassed = {
          player: player,
          pass: false,
          expected: testCase.output,
          got: data.result
        };
        serverSubmit({ io, room }, socketEmitNotPassed);
      }

    } catch (e) {
      success('error posting to coderunner service from socket server. e = ', e);
    }
  }

  if (allTestsPass) {
    const socketEmitPassed = {
      player: player,
      pass: true,
      expected: null,
      got: null
    };
    serverSubmit({ io, room }, socketEmitPassed);
  }

};

const clientMessage = async ({ io, room }, payload) => {
  success('client message heard');
  const url = process.env.REST_SERVER_URL;
  try {
    const { data } = await axios.post(`${url}/messages/`, payload);
    serverMessage({ io, room }, data);
  } catch (e) {
    success('error saving message to the database. e = ', e);
  }
};

const clientEmitters = {
  'client.ready': clientReady,
  'clientOne.update': clientOneUpdate,
  'clientTwo.update': clientTwoUpdate,
  'client.disconnect': clientDisconnect,
  'client.run': clientRun,
  'client.submit': clientSubmit,
  'client.message': clientMessage,
};

export default clientEmitters;
