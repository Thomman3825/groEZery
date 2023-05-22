export class gstoreAPIs{
    
    static async addUser(userData){
      const res =await fetch("http://localhost:1998/addUser",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(userData)
      }
      
      )  
      return res
        
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

    static async addProduct(){
        
    }
}
// https://cors-anywhere.herokuapp.com/