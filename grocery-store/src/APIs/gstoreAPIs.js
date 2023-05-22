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
        const res =await fetch("http://localhost:1998/addCategory", {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(categoryData)
        })
        return res
    }
    static async getCategory(){
        const res =await fetch("http://localhost:1998/getCategory")
        const data = await res.json()
        return data

        
    }

    static async addProduct(productData){
        const res =await fetch("http://localhost:1998/products", {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(productData)
        })
        return res
    }
}
// https://cors-anywhere.herokuapp.com/