const router = require('express').Router();
const db = require('../connection/database');

router.get('/cart/:id',(req,res)=>{
    const sql = `SELECT product_id,name,price,img_url FROM product WHERE product_id = '${req.params.id}'`
    console.log(req.params.id);
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error);
        }
        return res.status(200).send(result);
    })
})

module.exports = router;