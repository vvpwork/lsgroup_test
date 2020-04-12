module.exports = {
  port: process.env.PORT,
  sentry: {
    dsn:
      'https://9357006a9dfa42c7a3e55252edbb240e@o375029.ingest.sentry.io/5193885',
  },
  db: {
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  api_key: process.env.API_KEY,
  secret_key: process.env.SECRET_KEY,
};
