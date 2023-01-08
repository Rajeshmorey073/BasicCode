package _50_SimpleCode;

import java.util.Arrays;
import java.util.Scanner;

public class Datametica2 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("enter size of array");
		int arr[] = { 1, 2, 3, 4, 5, 3, 2, 1, 3 ,25};
		int max = arr[0], min = arr[0];
		for (int i = 0; i < arr.length; i++) {
			if (max < arr[i])
				max = arr[i];
			if (min > arr[i])
				min = arr[i];
		}
		Arrays.sort(arr);
		System.out.println("Max Num:"+max);
		System.out.println("Min Num:"+min);
		System.out.println("Max Sum:"+(arr[arr.length-2]+arr[arr.length-1]));
		
		sc.close();
	}

}
