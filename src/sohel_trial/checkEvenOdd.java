package sohel_trial;

import java.util.Scanner;

public class checkEvenOdd {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Value");
		int i= sc.nextInt();
		if(i%2==0)
			System.out.println("Even Num"+i);
		else
			System.out.println("Odd Num"+i);
		
		sc.close();
	}

}
