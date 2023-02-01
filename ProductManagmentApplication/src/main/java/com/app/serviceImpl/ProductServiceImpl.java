package com.app.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.IService.IProductService;
import com.app.dao.ProductDao;
import com.app.entity.ProductManagment;


@Service//tell its service layer to spring boot
@Transactional
public class ProductServiceImpl implements IProductService {
	@Autowired 
	private ProductDao productDao;

	@Override
	public List<ProductManagment> getProductList() {
		
		return productDao.findAll();
	}
	@Override
	public ProductManagment getProduct(String product_Name) {
		return productDao.findByName(product_Name);
	}
	@Override
	public void addProduct(ProductManagment product) {
		 productDao.save(product);
		 
	}
	@Override
	public void updateProduct(ProductManagment product,long pid) {
		productDao.save(product);
	}
	@Override
	public String findProductById(long id) {
		return productDao.findBy(id);
	}
	@Override
	public void deleteProduct(long pId) {
		productDao.deleteById(pId);
	}
	

}
