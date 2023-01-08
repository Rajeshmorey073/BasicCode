package _100Kisan;

import java.util.Scanner;

public class SearchArray {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] arr;
		System.out.println("Enter size of array");
		arr = new int[sc.nextInt()];
		System.out.println("Enter ele in array");
		for (int i = 0; i < arr.length; i++) {
			arr[i] = sc.nextInt();
		}
		System.out.println("Enter ele to search");
		int a=sc.nextInt(),b=0;
		boolean flag=false;
		
			
		
		for(int i=0;i<arr.length;i++) {
			if(a==arr[i]) {
				b=i;
				flag=true;
				break;
			}
		}
		if(flag)
			System.out.println(a+" is present in array at "+b+"th index");
		else
			System.out.println("Ele is not present in array");
		
		sc.close();
	}

}
