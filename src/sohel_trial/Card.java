package sohel_trial;

import java.util.Arrays;
import java.util.Scanner;

public class Card {
	static int[] toggle(int arr[], int n, int a) {
		int b = a;// 3
		while (a <= n) {// a=3,n=3 [1,0,0,0,0
			// arr[0]=1;
			if (arr[a - 1] == 0)
				arr[a - 1] = 1;
			else
				arr[a - 1] = 0;
			a += b;
		}
		return arr;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("enter size");
		int n = sc.nextInt();// 3
		sc.close();
		int[] arr = new int[n];
		int x = 1;
		for (int i = 0; i < n; i++) {
			arr[i] = 0;
		}
		for (x = 1; x <= n; x++) {// x=3,n=3
			arr = toggle(arr, n, x);
		}
		int cnt = 0;
		for (int i : arr) {
			if (i == 1)
				cnt++;
		}
		System.out.println(Arrays.toString(arr));
		System.out.println("Total Open Cards : " + cnt);
	sc.close();
	}
}
