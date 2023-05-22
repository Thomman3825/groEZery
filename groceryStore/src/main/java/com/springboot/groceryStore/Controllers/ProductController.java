package com.springboot.groceryStore.Controllers;

import com.springboot.groceryStore.Dao.ProductDao;
import com.springboot.groceryStore.Schemas.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductDao productDao;
    @PostMapping("/products")
    public String addProduct(@RequestBody List<Product>products){
        productDao.saveAll(products);
        return "Products added successfully";
    }
}
