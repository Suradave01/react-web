const router = require('express').Router();
const db = require('../connection/database');

router.get('/allshop',(req,res)=>{
    const sql = `SELECT product.product_id,product.name,product.price,product.img_url,product.gender,category.category_id,category.category_type from product
    inner join category on  product.category_id = category.category_id;`
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error);
        }
        // return res.status(200).send(result);
        console.log([...new Set(result.map((item)=>item.category_id))]);
        let categoryIds = [...new Set(result.map((item)=>item.category_id))];
        let allProduct = [];
        for (const category_id of categoryIds) {
            let Products = {
                categoryName: "",
                product:[],
                categoryId:null
            }
            for (const item of result) {
                if(category_id === item.category_id){
                    Products.product.push(item)
                    Products.categoryName = item.category_type
                    Products.categoryId = item.category_id
                }
            }
            allProduct.push(Products)
        }
        console.log(allProduct);
        return res.status(200).send(allProduct);
        
    })
})

module.exports = router;