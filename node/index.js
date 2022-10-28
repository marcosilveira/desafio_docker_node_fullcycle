    const express = require('express')
    const mysql = require('mysql')
    const app = express()
    const port = 3000

    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    }
    const connection = mysql.createConnection(config)
    var sql = "CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name VARCHAR(255), primary key(id))"
    connection.query(sql)
    sql = `INSERT INTO people(name) values('Wesley')`
    connection.query(sql)
    connection.end()

    app.get('/', (req,res) => {
        const connection = mysql.createConnection(config)
        sql = `SELECT * FROM people`
        connection.query(sql, function(err, result, fields){
            Object.keys(result).every(function(key){
                var row = result[key]
                res.send('<h1>Full Cycle Rocks!</h1></br>'+row.name)
                return false
            })
        })
        connection.end()
    })

    app.listen(port, ()=> {
        console.log('Rodando na porta ' + port)
    })