const router = require('express').Router();
const db = require('../connection/database');

router.get('/order/:id',(req,res)=>{
    const sql = `SELECT product.name,product.price,product.img_url,user_information.username,quantity from cart
    inner join product on  cart.product_id = product.product_id
    inner join user_information on cart.user_id = user_information.id where user_id = "${req.params.id}"`
    console.log(req.params.id);
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error);
        }
        console.log(result);
        return res.status(200).send(result);
    })
})

module.exports = router;