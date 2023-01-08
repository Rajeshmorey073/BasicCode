package chakan;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class BookService {
	
		 List<Book> books = new ArrayList<Book>();
		 String date_string;
		    SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");  
		    
		 public void initBooks() {
		 Book book;
		 try {
		 // Book 1
		 book = new Book();
		 book.setIsbn(111);
		 book.setTitle("Learn Java");
		 Date date = formatter.parse("05-11-2020"); 
		 book.setReleaseDate(date);
		 // Set Book date to 5th Nov 2020, UNCOMMENT LINE BELOW AND ADD YOUR LOGIC TO SET THE DATE
		 // book.setReleaseDate();
		 this.books.add(book);
		 // Book 2
		 book = new Book();
		 book.setIsbn(112);
		 book.setTitle("Learn Angular");
		  Date date2 = formatter.parse("02-10-2012"); 

		 book.setReleaseDate(date2);
		 // Set Book date to 2rd oct 2012, UNCOMMENT LINE BELOW AND ADD YOUR LOGIC TO SET THE DATE
		 // book.setReleaseDate();
		 this.books.add(book);
		 // Book 3
		 book = new Book();
		 book.setIsbn(113);
		 book.setTitle("Learn Spring");
		  Date date3 = formatter.parse("21-11-2021"); 

		 book.setReleaseDate(date3);
		 // Set Book date to 21st Nov 2021, UNCOMMENT LINE BELOW AND ADD YOUR LOGIC TO SET THE DATE
		 // book.setReleaseDate();
		 this.books.add(book);
		 }
		 catch (Exception e) {
			// TODO: handle exception
			 e.printStackTrace();
		}
		 System.out.println(this.books.size() + " Books in Library\n\n");
		 }
		 public Boolean mergeBooks(Book book1, Book book2) {
		 Boolean isBookMerged = false;
		 // Check if book 1 and book 2 is same if yes then merge the book and return true also add the Merged book to book set
		 // Add Merge logic below
		  if(book1.getTitle().equals(book2.getTitle()))
			  return true;
		 //UNCOMMENT LINE BELOW AND ADD YOUR LOGIC FOR MERGE
		 
		 /*
		 * if(){
		 * 
		 * }
		 * else {
		 * 
		 * }
		 */
		 
		 
		 //Add to books set logic below. If the books are merged add one with latest release date to the set if not merged add both the books t
		 
		 //UNCOMMENT LINE BELOW AND ADD YOUR LOGIC FOR ADDED MERGED BOOK TO BOOK SET
		 
		  if(isBookMerged) {
			  book1.setReleaseDate(book2.getReleaseDate());
			  book1.setIsbn(book1.getIsbn());
			  return true;
		  }else {
			  books.add(book1);
		  books.add(book2);
		  }
		 
		 
		 // DO NOT CHANGE CODE BELOW
		 return isBookMerged;
		 }
		 public void sortBooks() {
		 System.out.println("\n\n\nInside Sort books");
		 Book book;
		 Iterator booksIterator = this.books.iterator();
		 System.out.println("Before Sort books");
		 // Before Sort
		 while (booksIterator.hasNext()) {
		 book = (Book) booksIterator.next();
		 System.out.println(book.getIsbn() + " -- " + book.getTitle() + " -- " + book.getReleaseDate());
		 }
		 // Add Logic below to Sort books by release date using sorting alogrithm of your choice
		Collections.sort(books);
		 // After Sort
		 booksIterator = this.books.iterator();
		 System.out.println("\n\n\nAfter Sort books");
		 while (booksIterator.hasNext()) {
		 book = (Book) booksIterator.next();
		 System.out.println(book.getIsbn() + " -- " + book.getTitle() + " -- " + book.getReleaseDate());
		 }
		 }

}
