import createServer from '../src/lib/server';

const port = parseInt(process.env.PORT, 10) || 1337;

createServer().then(
  app =>
    app.listen(port, () => {
      const mode = process.env.NODE_ENV;
      console.log(`Server listening on ${port} in ${mode} mode`);
    }),
  err => {
    console.log('Error while starting up server');
    throw err;
  }
);
