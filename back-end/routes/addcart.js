const router = require('express').Router();
const db = require('../connection/database');


router.post('/addcart',(req,res)=>{
    const value = req.body.value;
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;
    const sql = `select * from cart where user_id = "${user_id}" and product_id = "${product_id}"`
    db.query(sql,(error,result)=>{
        
        if(result.length===0) {
            const add = `INSERT INTO cart (user_id,product_id,quantity) VALUES ('${user_id}','${product_id}',"${value}")`
            db.query(add,(error,result)=>{
            if(error) {
            return res.status(401).send('Error')
            }
            console.log("success");
            return res.status(200).send(result);
        })
        }
        
        else {
            let index = result.findIndex((x)=>x.product_id===product_id);
            console.log(typeof user_id);
            let isSameItem = result.some((x)=>x.product_id === product_id)
            console.log(result[index].id);
            console.log(isSameItem);
            let isSameUser = result.some((x)=>x.user_id === parseInt(user_id))
            console.log(isSameUser);
            if(isSameItem && isSameUser){
                let quantity = parseInt(parseInt(result[index].quantity) + parseInt(value));
                console.log(result[index].quantity);
                console.log(typeof quantity);
                const update = `UPDATE cart SET quantity = '${quantity}' WHERE id = '${result[index].id}'`
                db.query(update,(error,result)=>{
                
                if(error) {
                 console.log(error);
                 return res.status(401).send('Error')
                }
                 return res.status(200).send(result);
             })
            }else {
                    const add = `INSERT INTO cart (user_id,product_id,quantity) VALUES ('${user_id}','${product_id}',"${value}")`
                    db.query(add,(error,result)=>{
                    if(error) {
                    return res.status(401).send('Error')
                     }
                        console.log("success");
                        return res.status(200).send(result);
                    })
            }
        }
    })
})


module.exports = router;