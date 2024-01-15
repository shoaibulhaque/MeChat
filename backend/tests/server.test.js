// server.test.js
const request = require('supertest');
const server = require('../server');

describe('Server Test', () => {
  it('should respond to GET request at the root "/"', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('This is from backend Sever');
  });

  // Add more tests for other endpoints and scenarios
});