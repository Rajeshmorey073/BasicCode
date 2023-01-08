package _50_SimpleCode;

import java.util.Scanner;

public class PrimeOrNot {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Num to check prime or not");
		int i,cnt=0,a=sc.nextInt();//5
		if(a==1)
			System.out.println(a+ " is Prime");

		sc.close();
		for(i=1;i<=a;i++) {
			if((a%i)==0) {//5%1=0,5%5=0
				cnt++;//2
				if(cnt>2) {
					System.out.println(a+" is not Prime ");
					break;
				}
				
			}
		}
		if(cnt == 2)
			System.out.println(a+ " is Prime");
//		else
//			System.out.println(a+" is not Prime");
		
	}
	
}
