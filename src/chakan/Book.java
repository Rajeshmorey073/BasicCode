package chakan;

import java.util.Date;

public class Book implements Comparable<Book>{
	
		 private int isbn;
		 private String title;
		 private Date releaseDate;
		 public int getIsbn() {
		 return isbn;
		 }
		 public void setIsbn(int isbn) {
		 this.isbn = isbn;
		 }
		 public String getTitle() {
		 return title;
		 }
		 public void setTitle(String title) {
		 this.title = title;
		 }
		 public Date getReleaseDate() {
		 return releaseDate;
		 }
		 public void setReleaseDate(Date releaseDate) {
			 this.releaseDate = releaseDate;
			 }
		@Override
		public int compareTo(Book o) {
			// TODO Auto-generated method stub
			return getReleaseDate().compareTo(o.getReleaseDate());
		}
		   public boolean equals(Object o) {
		         if(!(o instanceof Book)) {
		             return false;
		        }
		         Book b = (Book) o;
		         return b.title.equals(title);
		           
		    }

}
