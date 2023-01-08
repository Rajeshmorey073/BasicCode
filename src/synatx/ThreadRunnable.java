package synatx;

public class ThreadRunnable implements Runnable {
	@Override
	public void run() {
		System.out.println("Thread Task");
	}

	public static void main(String[] args)  {
		ThreadRunnable t = new ThreadRunnable();// by this we cant start thread bcz it hv only run method.
		ThreadRunnable t2=new ThreadRunnable();
		
		Thread t1 = new Thread(t);// so we create inst var and pass t to constructor of thread class. it has start
		Thread t4=new Thread(t2);
		// method so we can call.
		t1.start();

		t4.start();
		/*IMP POINTS:-
		 * Runnable is more efficient bcz thread class we extend to create thread while
		 * working again this class may extends so it multiple inheritance : not used in
		 * java - here : it is interface we can impl this class in another 
		 * OR 
		 * -When you extend Thread class, you can't extend any other class which you require. 
		 * (As you know, Java does not allow inheriting more than one class). 
		 * -When you implement Runnable, you can save a space for your class to extend any other class in future or now
		 */
	     System.out.println("Thread names are following:");
	        System.out.println(t1.getName());
	        System.out.println(t4.getName());
	}
}
