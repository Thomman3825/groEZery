import React from 'react'
import { useState } from 'react'

const AdminUser = () => {
    const [category, setCategory]=useState('')
    const onSubmit= (e)=>{
        e.preventDefault()
        const categoryData ={
            category
        }

        handleChange(categoryData)
    }
    
    async function  handleChange (categoryData){

    }
  return (
    <div>
        <h1>Add Category</h1>
        <form>
            <input type= "text" name="category" onChange={(e)=>{setCategory(e.target.value)}} value={category}></input>
            <input type="submit" onSubmit={onSubmit}>Add Category</input>
        </form>
    </div>
  )
}

export default AdminUser