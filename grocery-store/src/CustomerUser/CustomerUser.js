import React, { useEffect } from 'react'
import { gstoreAPIs } from '../APIs/gstoreAPIs'
import { useState } from 'react'
import s from "./style.module.css"

const CustomerUser = () => {
  const [catList, setCatList]=useState([])
  const [productList,setProductList]=useState([])
const [prodtoCart, setProdToCart]=useState('')


  const catIdList=[catList.map((cat)=>cat.catId)]
  console.log(catIdList)

    async function getCategories(){
      const res =await gstoreAPIs.getCategory()
      setCatList(res)
    }


    async function getProducts(){
      const products = await gstoreAPIs.getProducts()
      setProductList(products)
    }
// console.log(productList[1].category.catId);
    useEffect(()=>{
      getCategories()
      getProducts()
    },[])

//    const onClick=(prodId)=>{
// console.log(prodId)
//  }

console.log(prodtoCart);
async function addToCart(){
const res =await gstoreAPIs.addToCart(prodtoCart)
const status = res.status
console.log(status);
}


  return (
    <div>
      <div>{catList&&catList.map((cat)=>{return <h1 key={cat.catId}>{cat.catName}
      <div>{productList&&productList.filter((prod)=>{return prod.category.catId === cat.catId}).map((prd)=>{return <div key={prd.prodId}
      >{prd.prodName}
      <div className={s.AddButton}><button onClick={(e)=>{e.preventDefault(); setProdToCart(prd); addToCart()}}>Add To Cart</button></div>
      </div>})}</div>
      </h1>})}</div>
        
    </div>
  )
}

export default CustomerUser