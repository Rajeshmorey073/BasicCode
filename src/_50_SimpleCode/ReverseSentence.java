package _50_SimpleCode;

import java.util.Scanner;

public class ReverseSentence {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter your sentence...");
		String str=sc.nextLine(),str2="";

		for(int i=str.length()-1;i>=0;i--) {
			str2=str2+str.charAt(i);
		}
		System.out.println(str2);
		sc.close();
	}

}
