package _50_SimpleCode;

import java.util.Arrays;
import java.util.Scanner;

public class AnagramStr{
	
	static boolean check(char arr1[],char arr2[]) {
		int i1=arr1.length,i2=arr2.length;
		
		if(i1 != i2)
			return false;
		
		Arrays.sort(arr1);
		Arrays.sort(arr2);
		
		for(int i=0;i<i1;i++) {
			if(arr1[i]!=arr2[i])
				return false;
		}
		return true;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enetr 1st String");
		String str1=sc.next();
		System.out.println("Enetr 2nd String");
		String str2=sc.next();
	

		char arr1[]=str1.toCharArray(),arr2[]=str2.toCharArray();
		
		boolean flag=check(arr1, arr2);
		if(flag)
			System.out.println("Entered string is Anagram ");
		else
			System.out.println("Entered string is not Anagram ");

		
	sc.close();	
	}

	

	

}
