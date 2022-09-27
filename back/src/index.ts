import Koa, { DefaultContext, DefaultState, ParameterizedContext } from 'koa';
import Router from '@koa/router';
import logger from 'koa-logger';
import json from 'koa-json';

const app: Koa<DefaultState, DefaultContext> = new Koa();
const router: Router = new Router();

app.use(json());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

router.get(
  '/',
  async (ctx: ParameterizedContext<DefaultState, DefaultContext>, next) => {
    ctx.body = { msg: 'Hello World' };

    await next();
  }
);
app.listen(3000, () => {
  console.log('Koa started at 3000');
});
