const router = require('express').Router();
const db = require('../connection/database');

router.get('/checkout/:id',(req,res)=>{
    const sql = `delete from cart where user_id = "${req.params.id}";`
    console.log(req.params.id);
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error);
        }
        console.log(result);
        return res.status(200).send("Checkout Success");
    })
})

module.exports = router;