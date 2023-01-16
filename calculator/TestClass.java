package calculator;

import java.util.Scanner;

public class TestClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.println("WELCOME");
		System.out.println(
				"RULE:\n + For Addition \n - For Substraction \n * For Multiplication \n / For Division \n 00 To Exit From Application ");
		double a = 0, b = 0, cnt = 0;
		double ans = 0;
		String sign = "";
		Main addition = new Addition();
		Main substraction = new Substraction();
		Main multiplication = new Multiplication();
		Main division = new Division();
		boolean flag = true;
		while (flag) {
			if (cnt > 0)
				a = ans;
			if (cnt == 0) {
				System.out.println("Enter First Value");
				a = sc.nextDouble();
				cnt++;
			}
			System.out.println("Enter sign(+,-,*,/) to do operation with above value/ans");
			sign = sc.next();
			if (sign.equals("00")) {
				System.out.println("YOUR WELCOME...!! Visit again");
				flag = false;
			}
			if (flag) {
				System.out.println("Enter Second Value");
				b = sc.nextDouble();
			}
			if (sign.equals("+")) {
				ans = addition.name(a, b);
			}
			if (sign.equals("-")) {
				ans = substraction.name(a, b);
			}

			if (sign.equals("*")) {
				ans = multiplication.name(a, b);
			}
			if (sign.equals("/")) {
				ans = division.name(a, b);
			}
			if(flag)
			System.out.println("Your Ans:" + ans);

		}
		sc.close();
	}

}
