const mysql = require('mysql');

const con = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123',
    database : 'test'
});

con.connect(err=>{
    if(err) throw err;
    else {
        console.log("SQL CONNECTED!");
    }
})

module.exports = con;
