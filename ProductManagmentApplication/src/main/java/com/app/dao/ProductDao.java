package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.ProductManagment;
@Repository
public interface ProductDao extends JpaRepository<ProductManagment, Long>  {
	
	@Query(value = "SELECT * FROM Product_Table WHERE Product_Name=?1",nativeQuery = true)
	ProductManagment findByName(String product_Name );
	@Query(value = "SELECT Product_Name FROM Product_Table WHERE id=?1",nativeQuery = true)
	String findBy(long id);
}
