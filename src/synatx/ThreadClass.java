package synatx;

public class ThreadClass extends Thread {
	
	public void run() {
		System.out.println("Thread task");
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ThreadClass t=new ThreadClass();
		ThreadClass t2=new ThreadClass();
		t2.start();
		t.start();
		
		//t.start();// runtime exception bcz thread  cant start agian after dead 
	}
} 

	


