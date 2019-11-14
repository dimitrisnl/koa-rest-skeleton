import apiHelper from './api-helper';

describe('Non-existing route', () => {
  it('should return 404', async () => {
    const client = await apiHelper();
    try {
      await client.get('/four-of-four');
    } catch (e) {
      expect(e.response.status).toBe(404);
    }
  });
});
