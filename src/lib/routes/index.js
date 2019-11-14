import Router from 'koa-router';

const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'Hello';
});

router.get('/hi', async ctx => {
  ctx.body = 'Hi';
});

export default router;
