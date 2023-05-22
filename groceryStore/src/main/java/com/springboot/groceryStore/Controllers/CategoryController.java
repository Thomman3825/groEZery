package com.springboot.groceryStore.Controllers;

import com.springboot.groceryStore.Dao.CategoryDao;
import com.springboot.groceryStore.Dao.UserDao;
import com.springboot.groceryStore.Schemas.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    private CategoryDao categoryDao;
    @PostMapping("/Category")
    public String addCategory(@RequestBody List<Category> categories){
         categoryDao.saveAll(categories);
         return "category added successfully";
    }
    @GetMapping("/Category")
    public List<Category> getCategory(){
        return categoryDao.findAll();
    }
}
