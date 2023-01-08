package _50_SimpleCode;

import java.util.Scanner;

public class Armstrong {// When the sum of the cube of the individual digits of a number is equal to
						// that number
	public int countDigit(int i) {
		int cnt = 0;
		while (i > 0) {
			i = i / 10;
			cnt++;
		}
		return cnt;
	}

	public int powerVal(int base, int length) {
		int sum = base;
		for (int i = 1; i <length; i++) {
			sum = sum * base;
		}
		return sum;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enetr num to check");// 153
		Armstrong arm = new Armstrong();
		int a = sc.nextInt(), b = a, c, sum = 0;// 153
		int length = arm.countDigit(a);
		// int x=arm.powerVal(a, length);
		// System.out.println("Val "+x);

		while (a > 0) {
			c = a % 10;// 3
			c = arm.powerVal(c, length);// 27
			sum += c;// 27+
			a /= 10;// 15
			sc.close();
		}
		if (sum == b)
			System.out.println(b + " is armstrong num");
		else
			System.out.println(b + " is not armstrong num");
	}

}
