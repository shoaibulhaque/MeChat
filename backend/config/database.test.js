const sinon = require('sinon');
const mongoose = require('mongoose');
const databaseConnect = require('./database');

describe('databaseConnect', () => {
  let connectStub;

  beforeEach(() => {
    // Create a stub for mongoose.connect to prevent actual database connection
    connectStub = sinon.stub(mongoose, 'connect');
  });

  afterEach(() => {
    // Restore the original mongoose.connect method after each test
    connectStub.restore();
  });

  it('should connect to the database with the correct options', async () => {
    // Stub the mongoose.connect method to resolve with a dummy value
    connectStub.resolves();

    // Call the databaseConnect function
    await databaseConnect();

    // Assert that mongoose.connect was called with the correct options
    expect(connectStub.calledOnce).toBe(true);
    expect(connectStub.calledWith(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })).toBe(true);
  });

  it('should log success message on successful connection', async () => {
    // Stub the mongoose.connect method to resolve with a dummy value
    connectStub.resolves();

    // Spy on console.log to capture the output
    const consoleLogSpy = jest.spyOn(console, 'log');

    // Call the databaseConnect function
    await databaseConnect();

    // Assert that the success message was logged
    expect(consoleLogSpy).toHaveBeenCalledWith('Mongodb Database Connected');

    // Restore the original console.log method after the test is done
    consoleLogSpy.mockRestore();
  });

  it('should log error message on connection failure', async () => {
    // Stub the mongoose.connect method to reject with a dummy error
    const dummyError = new Error('Connection failed');
    connectStub.rejects(dummyError);

    // Spy on console.log to capture the output
    const consoleLogSpy = jest.spyOn(console, 'log');

    // Call the databaseConnect function
    await databaseConnect();

    // Allow time for asynchronous operation to complete
    await new Promise(resolve => setTimeout(resolve, 0));

    // Assert that the error message was logged
    expect(consoleLogSpy).toHaveBeenCalledWith(dummyError);

    // Restore the original console.log method after the test is done
    consoleLogSpy.mockRestore();
  });
});
