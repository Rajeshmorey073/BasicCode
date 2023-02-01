package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.IService.IProductService;
import com.app.entity.ProductManagment;

@RestController // representational state transfer (to take order:restarunt)
public class ProductionController {
	private static final Exception Exception = null;
	@Autowired
	private IProductService productService;

	// to return All Product List
	@GetMapping("/products")
	public List<ProductManagment> getProductList() {
		return productService.getProductList();
	}

	// to return Product by name (? what if not present code & msg
	@GetMapping("/product/{product_Name}")
	public ResponseEntity<ProductManagment> getProduct(@PathVariable String product_Name) {
		try {
			System.out.println("by name");
			ProductManagment product = productService.getProduct(product_Name);
			System.out.println(product.getProduct_Name());
			return new ResponseEntity<ProductManagment>(product, HttpStatus.OK);
		} catch (NullPointerException e) {
			return new ResponseEntity<ProductManagment>(HttpStatus.NOT_FOUND);
		}

	}

	// Add new product
	@PostMapping("/product")
	public ResponseEntity<String> addProduct(@RequestBody ProductManagment product) {
		try {
			
			//System.out.println(product.getId());	
			productService.addProduct(product);
			String msg = "Your Product Added Succesfully..!!!";
			return new ResponseEntity<String>(msg, HttpStatus.ACCEPTED);
		} catch (DataIntegrityViolationException e) {
			String msg = "Please check your entered product details (No repeated products are allowed)";
			return new ResponseEntity<String>(msg, HttpStatus.BAD_REQUEST);
		}
		
	}

	//update product by given id
	@PutMapping("/product/{pid}")
	public ResponseEntity<String> updateProduct(@RequestBody ProductManagment product, @PathVariable String pid) {
		try {
			String p1 = productService.findProductById(Long.parseLong(pid));
			if (p1.length() <= 0)
				throw Exception;
			String msg = "Your Product Updated Succesfully..!!!";
			productService.updateProduct(product, Long.parseLong(pid));
			return new ResponseEntity<String>(msg, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			String msg = "Please check your entered product details (Please varify Product id or Product name may repeated)..!!!";
			return new ResponseEntity<String>(msg, HttpStatus.BAD_REQUEST);
		}
	}
	//Delete product by given id
	@DeleteMapping("/product/{pId}")
	private ResponseEntity<String> deleteProduct(@PathVariable String pId) {// if we just want to show err status : ret
																			// type string remove & just call service method
		try {
			productService.deleteProduct(Long.parseLong(pId));
			String msg = "Your Product Deleted Succesfully..!!!";
			return new ResponseEntity<>(msg, HttpStatus.OK);
		} catch (Exception e) {
			String msg = "Your Product not found with entered Id..!!!";
			return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
		}

	}

}