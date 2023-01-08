package _100Kisan;

import java.util.Scanner;

public class TempConversion {

	public static void main(String[] args) {
		Scanner sc =new Scanner(System.in);
		System.out.println("Enter Temp to convert=");
		double temp=sc.nextDouble();
		System.out.println("1.for celcius to farenheit"+"\n"+"2.for farenheit to celcius"+"\n"+"ENTER YOUR CHOICE:");
		int choice=sc.nextInt();
		switch (choice) {
		case 1:double f=(temp*(9/5)+32);
		System.out.println("Temp in farenheit = "+f);
			break;
			case 2:double c=((temp-32)*(5/9));
			System.out.println("Temp in celcius = "+c);
			break;
		default:System.out.println("Try again---!!");
			break;
		}
	sc.close();
	}

}
