const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || 500;
    ctx.body = err.toJSON ? err.toJSON() : { message: err.message, ...err };
  }
};

export default errorHandler;
