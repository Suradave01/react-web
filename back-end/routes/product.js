const router = require('express').Router();
const db = require('../connection/database');

router.get('/ShirtMen',(req,res)=>{
    const sql = `SELECT product_id,name,price,img_url FROM product WHERE (category,gender) IN (("เสื้อ","men"))`
    db.query(sql,(error,result)=>{
        if(error){
            console.log("rr");
        }
        return res.status(200).send(result);
    })
})

module.exports = router;