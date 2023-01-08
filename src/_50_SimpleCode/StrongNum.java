package _50_SimpleCode;

import java.util.Scanner;

public class StrongNum {
	static int fact(int r) {
		int fact=1;
		while(r>0) {//5
			fact=fact*r;
			r--;
		}
		return fact;
	}
	public static void main(String[] args) {
		//  For Example: 145 is strong number. Since, 1! + 4! + 5!
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter num to check");
		int num=sc.nextInt();
		int r,n=num,sum=0;
		while(num>0) {
			r=num%10;
			sum=sum+fact(r);
			num=num/10;
		}
		if(sum==n)
			System.out.println(n+" is strong num");
		else
			System.out.println(n+" is not strong num");
		sc.close();
	}

}
