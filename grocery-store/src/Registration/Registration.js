import React, { useState } from 'react'
import { gstoreAPIs } from '../APIs/gstoreAPIs'
import s from "./style.module.css"

const Registration = () => {
    const [userName,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPass]=useState('')
    const [fullName, setFullName]= useState('')
    const [userType, setUserType]=useState('')

//    const formEl = document.querySelector('.form')

// formEl.addEventListener('submit',e=>{
    

// })
const onSubmit = (e)=>
{
const formData = [{
fullName,  
userName,
email,
password,
userType
}]
    e.preventDefault()
    
    
    
    // const data = new URLSearchParams(formData)
    handleChange(formData)
   console.log(JSON.stringify(formData) )

}
    

    async function handleChange(formData){
        await gstoreAPIs.addUser(formData)

    }

    // console.log(name)
  return (
    <div className={s.Container}>
        <form onSubmit={onSubmit}>
            <label htmlFor="FullName">Enter name:</label>
            <input type="text" name="FullName" onChange={(e)=>{setFullName(e.target.value)}} value={fullName}></input>

            <label htmlFor="UserName">Enter user name :</label>
            <input type="text" name="UserName" onChange={(e)=>{setName(e.target.value)}} value={userName}></input>

            <label htmlFor="email">Enter email:</label>
            <input type="email" name="Email"onChange={(e)=>{setEmail(e.target.value)}} value={email} ></input>

            <label htmlFor="password">Enter password:</label>
            <input type="password" name="Password" onChange={(e)=>{setPass(e.target.value)}} value={password} ></input>

            <select name= "userType" onChange={(e)=>{setUserType(e.target.value)}} value={userType}>
                <option value="vendor" >Vendor</option>
                <option value="customer">Customer</option>
            </select>

            <input type="submit" value="Register" onSubmit={handleChange}></input>
        </form>

    </div>
  )
}

export default Registration