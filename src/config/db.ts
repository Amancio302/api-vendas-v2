export default {
  postgres: {
    host: process.env.DATABASE_HOST,
    db: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWD,
  },
};
