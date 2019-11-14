import apiHelper from './api-helper';

describe('Routes', () => {
  it('can get hello', async () => {
    const client = await apiHelper();
    const response = await client.get('/');

    expect(response.status).toBe(200);
    expect(response.data).toBe('Hello');
  });

  it('can get hi', async () => {
    const client = await apiHelper();
    const response = await client.get('/hi');

    expect(response.status).toBe(200);
    expect(response.data).toBe('Hi');
  });
});
