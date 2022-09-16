function notFound(req: Request, res: { status: any }, next: any) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.url}`);
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err: any, req: Request, res: { statusCode: Number, status: any, json: any }, next: any) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    response: err.response ? err.response.data : null,
  });
}

export default {
  notFound,
  errorHandler
};