package chakan;

import java.text.SimpleDateFormat;
import java.util.Date;

public class LibraryAppApplication {
	public static void main(String[] args) {
		 System.out.println("Test application Started");
		 BookService bookService = new BookService();
		  String date_string;
	       //Instantiating the SimpleDateFormat class
	       SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");      
	       //Parsing the given String to Date object
	           
	       //System.out.println("Date value: "+date);
		 try {
		 // Init books set
		 bookService.initBooks();
		 
		 // Create new books to test your merge logic
		 Book b1 = new Book();
		 b1.setTitle("Learn React");
		 b1.setIsbn(124);
		// Date date = formatter.parse("22-12-2022"); 
		//b1.setReleaseDate(date);
		 b1.setReleaseDate(new Date());
		 Book b2 = new Book();
		 b2.setTitle("Learn React");
		 b2.setIsbn(125);
		// date = formatter.parse("24-12-2022"); 
		 //b2.setReleaseDate(date);

		b2.setReleaseDate(new Date(System.currentTimeMillis() - 1000));
		 
		 // Call merge method to test the outcome
		 Boolean isBookMerged = bookService.mergeBooks(b1, b2); // Merge book b1 and b2
		 
		 System.out.println("Book Merged -- " + isBookMerged); // Expected true
		 Book b3 = new Book();
		 b3.setTitle("Learn Hibernate");
		 b3.setIsbn(126);
		 b3.setReleaseDate(new Date(System.currentTimeMillis() - 1000));
		 // Call merge method again and test the outcome for different test data
		 isBookMerged = bookService.mergeBooks(b2, b3); // Merge book b2 and b3
		 
		 System.out.println("Book Merged -- " + isBookMerged); // Expected false
		 
		 // Call sort book method to get sorted list of books in set
		 bookService.sortBooks();
		 
		 
		 } catch (Exception e) {
		 e.printStackTrace();
		 }
		 }

}
