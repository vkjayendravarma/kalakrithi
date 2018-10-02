var env = {
  PORT: process.env.PORT || 4192,
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://xjjtogzm:U5I2WjPEyEo085rB1N8FeRjk2DoSewti@stampy.db.elephantsql.com:5432/xjjtogzm',
  DATABASE_NAME: process.env.DATABASE_NAME || 'xjjtogzm',
  DATABASE_HOST: process.env.DATABASE_HOST || 'stampy.db.elephantsql.com',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'xjjtogzm',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'U5I2WjPEyEo085rB1N8FeRjk2DoSewti',
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

// env = {
//   PORT: process.env.PORT || 4192,
//   DATABASE_URL: process.env.DATABASE_URL || 'postgresql://gautam:P@ssw0rd@localhost:5432/gautam',
//   DATABASE_NAME: process.env.DATABASE_NAME || 'gautam',
//   DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
//   DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'gautam',
//   DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'P@ssw0rd',
//   DATABASE_PORT: process.env.DATABASE_PORT || 5432,
//   DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
//
//   NODE_ENV: process.env.NODE_ENV || 'development',
// };


module.exports = env;
