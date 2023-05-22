package com.springboot.groceryStore.Schemas;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue
    int prodId;
    String ProdName;
    int stock;
    double price;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="catId")
    private Category category;

//    @ManyToOne(fetch = FetchType.LAZY)
//    private OrderCart orderCart;
}
