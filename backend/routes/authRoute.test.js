// backend/routes/authRoute.test.js
const request = require('supertest');
const express = require('express');
const authRoute = require('./authRoute');
const app = express();

// Mock the controller functions
jest.mock('../controller/authController', () => ({
  userRegister: jest.fn(),
  userLogin: jest.fn(),
  userLogout: jest.fn(),
}));

// Mock the middleware function
jest.mock('../middleware/authMiddleware', () => ({
  authMiddleware: jest.fn((req, res, next) => next()),
}));

app.use('/auth', authRoute);

test('POST /auth/user-register - Successful Registration', async () => {
  // Mock the controller function to simulate a successful registration
  require('../controller/authController').userRegister.mockImplementation((req, res) => {
    res.status(201).json({
      successMessage: 'Your Register Successful',
      token: 'mockToken',
    });
  });

  const response = await request(app)
    .post('/auth/user-register')
    .send({
      userName: 'JohnDoe',
      email: 'john.doe@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    })
    .expect(201);

  expect(response.body).toEqual({
    successMessage: 'Your Register Successful',
    token: 'mockToken',
  });
});

// Add more test cases for different scenarios
