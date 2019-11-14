import createServer from '../src/lib/server';
import memoize from 'memoizee';
import axios from 'axios';

const apiHelper = async () => {
  const server = await startServer();
  const baseURL = `http://127.0.0.1:${server.address().port}`;
  const client = axios.create({
    baseURL,
  });

  return client;
};

const startServer = memoize(async () => {
  return (await createServer()).listen();
});

afterAll(async () => {
  const server = await startServer();
  return new Promise(resolve => server.close(resolve));
});

export default apiHelper;
