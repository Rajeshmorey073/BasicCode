package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Product_Table")
public class ProductManagment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(unique = true)
	String Product_Name;
	
	String Product_Description;
	
	double Product_Price;
	
	public ProductManagment() {
		super();
	}

	public ProductManagment(Long id, String product_Name, String product_Description, double product_Price) {
		super();
		this.id = id;
		Product_Name = product_Name;
		Product_Description = product_Description;
		Product_Price = product_Price;
	}

//	public Long getId() {
//		return id;
//	}

//	public void setId(Long id) {
//		this.id = id;
//	}

	public String getProduct_Name() {
		return Product_Name;
	}
	public void setProduct_Name(String product_Name) {
		Product_Name = product_Name;
	}
	public String getProduct_Description() {
		return Product_Description;
	}
	public void setProduct_Description(String product_Description) {
		Product_Description = product_Description;
	}
	public double getProduct_Price() {
		return Product_Price;
	}
	public void setProduct_Price(double product_Price) {
		Product_Price = product_Price;
	}
	@Override
	public String toString() {
		return "ProductManagment [ Product_Name=" + Product_Name + ", Product_Description="
				+ Product_Description + ", Product_Price=" + Product_Price + "]";
	}

	
	
	
}
