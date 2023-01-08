package _50_SimpleCode;

import java.util.Scanner;

public class Factorial {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter num to get factorial..!!!");
		int i,a=sc.nextInt(),sum=1;
		sc.close();
		for(i=a;i>0;i--) {
			sum *= i;
		}
		System.out.println(a+"'s Factorial is : "+sum);

	}

}
