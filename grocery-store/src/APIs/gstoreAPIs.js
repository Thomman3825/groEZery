export class gstoreAPIs{
    
    static async addUser(userData){
      await fetch("http://localhost:1998/addUser",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(userData)
      }
      
      )  
        
    }

    static async addCategory(categoryData){
        await fetch("http://localhost:1998/addCategory", {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(categoryData)
        })
    }
    static async getCategory(){
        const res =await fetch("http://localhost:1998/getCategory")
        const data = await res.json()
        return data

        
    }
}
// https://cors-anywhere.herokuapp.com/