package _50_SimpleCode;

import java.util.Scanner;


public class RemoveRepeated {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("enter size of array..!!!");
		int size=sc.nextInt(),j=0,c=0;
		int arr[]=new int[size];//5 [1 1 2 3 4]
		int arr1[]=new int[size];
		
		System.out.println("Enter array's elements..!!!");
		for(int i=0;i<arr.length;i++) {
			arr[i]=sc.nextInt();			
		}
		for(int i=0;i<arr.length;i++) {
			
			if(c!=arr[i]) {
				arr1[j]=arr[i];//1
				j++;
				c=arr[i];//1
			}
		}
for (int i : arr1) {
	if(i!=0)
		System.out.println(i);
}
sc.close();
	}

}
