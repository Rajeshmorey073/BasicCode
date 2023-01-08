package _50_SimpleCode;

public class Piramid {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	      int i, j, my_input;
	      my_input = 8;
	      System.out.println("The number of rows is defined as " +my_input);
	      System.out.println("The pyramid star pattern : ");
	      for (i=0; i<my_input; i++){
	         for (j=my_input-i; j>1; j--){
	             System.out.print(" ");
	         }
	         for (j=0; j<=i; j++ ){
	            System.out.print("* ");
	         }
	         System.out.println();// for next line
	      }
	      System.out.println("---------------OR-------------------");
	      int c=8;
	      for(i=0;i<=c;i++) {
	    	  for(j=0;j<=i;j++) {
	    	  System.out.print(" * ");
	    	  }
	    	  System.out.println();
	      }
	   }
	}


