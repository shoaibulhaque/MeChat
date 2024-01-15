// backend/routes/messageRoute.test.js
const request = require('supertest');
const express = require('express');
const messageRoute = require('./messengerRoute');
const app = express();

// Mock the controller functions
jest.mock('../controller/messengerController', () => ({
  getFriends: jest.fn(),
  messageUploadDB: jest.fn(),
  messageGet: jest.fn(),
  ImageMessageSend: jest.fn(),
  messageSeen: jest.fn(),
  delivaredMessage: jest.fn(),
}));

// Mock the middleware function
jest.mock('../middleware/authMiddleware', () => ({
  authMiddleware: jest.fn((req, res, next) => next()),
}));

app.use('/message', messageRoute);

test('GET /message/get-friends - Successful Retrieval of Friends', async () => {
  // Mock the controller function to simulate a successful retrieval of friends
  require('../controller/messengerController').getFriends.mockImplementation((req, res) => {
    res.status(200).json({
      success: true,
      friends: [
        { fndInfo: { _id: 'friendId1', name: 'Friend1' }, msgInfo: { _id: 'messageId' } },
        { fndInfo: { _id: 'friendId2', name: 'Friend2' }, msgInfo: { _id: 'messageId' } },
      ],
    });
  });

  const response = await request(app)
    .get('/message/get-friends')
    .expect(200);

  expect(response.body).toEqual({
    success: true,
    friends: [
      { fndInfo: { _id: 'friendId1', name: 'Friend1' }, msgInfo: { _id: 'messageId' } },
      { fndInfo: { _id: 'friendId2', name: 'Friend2' }, msgInfo: { _id: 'messageId' } },
    ],
  });
});

// Add more test cases for different scenarios
