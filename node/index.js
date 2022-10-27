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

    app.get('/', (req,res) => {
        const connection = mysql.createConnection(config)
        const sql = `SELECT * FROM people`
        connection.query(sql, function(err, result, fields){
            Object.keys(result).forEach(function(key){
                var row = result[key]
                res.send('<h1>Full Cycle Rocks!</h1></br>'+row.name)
            })
        })
        connection.end()
    })

    app.listen(port, ()=> {
        console.log('Rodando na porta ' + port)
    })