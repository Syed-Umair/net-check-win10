const checkInternet = require('./index');

describe('testing checkInternet', () => {
  it('should return true', async () => {
    expect.assertions(1);
    await expect(checkInternet()).resolves.toEqual(true);
  })
})
