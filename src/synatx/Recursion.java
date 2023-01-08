package synatx;

import java.util.Scanner;

public class Recursion {
	
	public int sum(int k) {
		if (k > 0) 
			return k + sum(k - 1);
		return 0;
	}

	public static void main(String[] args) {
		Recursion r=new Recursion();
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter any num to get addition from 0 to n'th");
		int i = sc.nextInt();
		System.out.println("Total sum is: "+r.sum(i));//or method static and call direct without creating object.
		sc.close();
	}

}
