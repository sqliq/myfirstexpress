const express = require('express')
const app = express()
const port = 3020
const db = require('./db')

// notice here I'm requiring my database adapter file
// and not requiring node-postgres directly

// app.get('/:id', (req, res, next) => {
//   db.query('SELECT * FROM users WHERE id = $1', [id], (err, res) => {
//     if (err) {
//       return next(err)
//     }
//     res.send(res.rows[0])
//   })
// })

/*
client.connect(err => {
    if (err) throw err;
    else {
        queryDatabase();
    }
});

function queryDatabase() {
    const query = `
    select count(distinct table_schema) as SchemasWithTables from information_schema.tables;
    `;

    client
        .query(query)
        .then(() => {
            console.log('Query sent successfully');
            client.end(console.log('Closed client connection'));
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
            process.exit();
        });
}
*/
app.get('/', (req, res, next) => {
  db.query('select count(distinct table_schema) as SchemasWithTables from information_schema.tables;', (err, dbres) => {
    if (err) {
      return next(err)
    }
    res.send(dbres.rows[0])
  })
} )

//select count(distinct table_schema) from information_schema.tables

//app.get('/', (req, res) => res.send('Hello World!'))

/*
app.get('/', (req, res) => {
    postgresblabla().then((rows) => {
        res.send('Hello World again!');
    });
})
*/
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

