package _100Kisan;

import java.util.Scanner;

public class Vinay1 {
	static double findPer(int mark) {
		double per = (mark * 100) / 80;
		return per;
	}

	static int result(int a, int b, int c) {
		int mark = 0;
		double bioPer = findPer(a), chemPer = findPer(b), phyPer = findPer(c);
		if (bioPer > 40 && chemPer > 40)
			mark = a + b;
		if (chemPer > 40 && phyPer > 40)
			mark = b + c;
		if (bioPer > 40 && bioPer > 40)
			mark = a + c;
		if (bioPer > 40 && chemPer > 40 && phyPer > 40)
			mark = a + b + c;
		if (bioPer < 40 && chemPer < 40 && phyPer < 40)
			return 0;
		return mark;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter three sub mark");
		int bio = sc.nextInt(), chem = sc.nextInt(), phy = sc.nextInt();
		System.out.println(result(phy, bio, chem));
		sc.close();
	}
}
