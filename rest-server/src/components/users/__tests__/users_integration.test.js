require('dotenv').config();

import request from 'supertest';

import App from '../../../config/express';
import db from '../../../config/database';

beforeAll(async () => {

});

describe('/api/user integration tests', () => {
  it('should be able to save a user then retrieve the user just saved', () => {
    request(App)
    .post(url, body)
    .expect(200)
    .get(url)
    .expect(200)
    .expect().toBe()
  })
});