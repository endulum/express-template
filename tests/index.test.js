import { router } from '../routes/index';

import request from 'supertest';
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/', router);

test('index route works', done => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect({ message: 'Hello, World' })
    .expect(200, done)
});