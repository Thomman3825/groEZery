import React, { useEffect, useState } from 'react'
import { gstoreAPIs } from '../APIs/gstoreAPIs'

const VendorUser = () => {
    const [prodName,setProdName]=useState('')
    const [price, setPrice]=useState('')
    const [stock, setStock]=useState('')
    const [catId, setCat]=useState('')
    const [catList, setCatList]=useState([])

    async function getCategories(){
        
        // console.log(categories); 
        // categories.map((cat)=>{
        //     setCatList(cat)
        // })
        // console.log(catList)
    }
useEffect(() => {
    const getCategory =async()=>{
        const categories = await gstoreAPIs.getCategory()

        setCatList(categories)
       
    }
     getCategory()
     console.log(catList);
},[])
  return (
    <div>
        <h1>Add Product</h1>
        <form>
            <input type="text" name="prodName" value={prodName} onChange={(e)=>setProdName(e.target.value)}></input>

            <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}></input>

            <input type="text" name="stock" value={stock} onChange={(e)=>setStock(e.target.value)}></input>

            <select value={catId} onChange={(e)=>setCat(e.target.value)}>
                {catList && catList.map((cat)=><option key={cat.catId} value={cat.catId}>{cat.catName}</option>)}
            </select>
            <input type ="submit" value="Add Product"></input>
        </form>


    </div>
  )
}

export default VendorUser