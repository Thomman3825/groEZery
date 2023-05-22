export class gstoreAPIs{
    
    static async addUser(userData){
      await fetch("http://localhost:1998/addUser",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(userData)
      }
      
      )  
        
    }
    
}
// https://cors-anywhere.herokuapp.com/