package sohel_trial;

 class Hcker extends Thread{
	 public void run() {
		try {
			System.out.println("Thread "+Thread.currentThread().getId() + " is running");}
		
		catch(Exception e) {
			System.out.println("Excepton is caugth");
		}
		}
 }
	 
 class PrimeNum{
	 public static void main(String[] args) {
		 int n=4;
		 for (int i=0;i<n;i++) {
			 Hcker object= new Hcker();
			 object.start();
		 
	
			
			
		}
	}
 }
