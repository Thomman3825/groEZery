package com.springboot.groceryStore.Schemas;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderCart {
    @Id
    @GeneratedValue
    int orderId;
    boolean isPlaced;

    @OneToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name="userId",nullable = false)
    private User user;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "prodId",orphanRemoval = true) //has to be checked
    private List<Product> product;

}
