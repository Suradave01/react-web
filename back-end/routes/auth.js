const router = require('express').Router();
const db = require('../connection/database');

router.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(username === '' && password === '') {
        return res.status(401).send('username and password invalid.')
    }
    else if(username === ""){
        return res.status(401).send('username invalid.');
    }
    else if(password === "") {
        return res.status(401).send('password invalid.');
    }
    const sql = `SELECT id,username,password FROM user_information WHERE username = '${username}'`
    db.query(sql,(error,result)=>{
        if(result.length == 0) {
            return res.status(401).send('username incorrect.')
            console.log(result);
        }
        if(password != result[0].password) {
            return res.status(401).send('password incorrect.')
        }
        return res.status(200).send(result[0]);
    })
    
});

router.post('/register',(req,res)=>{
    const {username,password,re_password} = req.body;
    if(!username || !password){
        return res.status(401).send('username and password invalid.');
    }
    else if (password != re_password) {
        return res.status(401).send('password and repassword do not match.');
    }
    else if (username.length <= 5) {
        return res.status(401).send('username less than 6 character')
    }
    else if (password.length <= 5) {
        return res.status(401).send('password less than 6 character')
    }
    const sql = `INSERT INTO user_information (username,password,re_password) VALUES ("${username}","${password}","${re_password}")`
    db.query(sql,(error,result)=>{
        if(error) {
            return res.status(401).send('username already.')
        }
        return res.status(200).send({username:req.body.username,password:req.body.password,re_password:req.body.re_password});
    })
})


module.exports = router;