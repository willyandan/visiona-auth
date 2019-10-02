require('dotenv').config()

module.exports = {
  "development": {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  "production": {
    "username": "rydjskfbwdnegg",
    "password": "378cd115d1ea3a1e4480e50ddd13900d9101c3f8a81df94c6c93cc4f848a678a",
    "database": "db6er9ms2l5ndt",
    "host": "ec2-107-21-102-221.compute-1.amazonaws.com",
    "dialect":"postgres",
    "protocol":"postgres",
    "port":"5432"
  }
}