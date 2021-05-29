const router = require('express').Router();
const db = require('../connection/database');

router.get('/shop/:id',(req,res)=>{
    const sql = `SELECT product_id,name,price,img_url,gender FROM product WHERE category_id = '${req.params.id}'`
    console.log(req.params.id);
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error);
        }
        return res.status(200).send(result);
    })
})

module.exports = router;