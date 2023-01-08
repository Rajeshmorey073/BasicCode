package _50_SimpleCode;

import java.util.Scanner;

public class Pallindrom {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Num is check palindrome or not");
		int a=sc.nextInt(),b=a,c,sum=0;
		while(a>0) {
			
		c=a%10;//121%10=1,12%10=2,1%10=1
		sum=sum*10+c;//1,10+2=12,120+1=121
		a=a/10;//121/10=12,12/10=1,1/10=0
	}
		if(sum==b)
			System.out.println(b+" is palindrome");
		else
			System.out.println(b+ " is not palindrome");sc.close();
	}
}
