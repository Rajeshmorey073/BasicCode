package com.app.IService;

import java.util.List;
import com.app.entity.ProductManagment;

public interface IProductService {
	public List<ProductManagment> getProductList();
	public ProductManagment getProduct(String product_Name);		
	public void addProduct(ProductManagment product);
	public String findProductById(long id); 
	public void updateProduct(ProductManagment product, long pid);
	public void deleteProduct(long pid);
}
