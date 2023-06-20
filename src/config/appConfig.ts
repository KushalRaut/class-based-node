const appConfig = {
  port: process.env.PORT ?? 8000,
  env: process.env.NODE_ENV ?? "development",
  db: process.env.MONGO_URI,
};

export default appConfig;
