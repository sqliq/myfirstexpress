const { Pool, Client } = require('pg')

const config = {
    host: 'trainhack2018.postgres.database.azure.com',
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: 'sqliq@trainhack2018',     
//    password: 'set this in ps session with $env:PGPASSWORD = "MyPassword"',
    database: 'postgres',
    port: 5432,
    ssl: true
};

//const client = new pg.Client(config);

const pool = new Pool(config);

module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    }
  }
  
  