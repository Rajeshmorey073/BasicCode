package _50_SimpleCode;

import java.util.Scanner;

public class String_Palindrome {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter word to check");
		String a=sc.next(),b=a,sum="";
		char x;
		for(int i=a.length()-1;i>=0;i--) {
			x=a.charAt(i);
		    sum=sum+x;
		}
//	OR: 	int i=a.length()-1;char x;
//		 while(i>=0) {x=a.charAt(i);sum=sum+x;i--;}
	
		if(sum.equals(b))
			System.out.println(sum+" is palindrome string");
		else
			System.out.println(sum+" is not palindrome string");
sc.close();
	}

}
