package _50_SimpleCode;

public class ReverseNum {

	public static void main(String[] args) {
		int i = 12345, sum = 0;
		while (i > 0) {
			int b = i % 10;
			sum = sum * 10 + b;
			i = i / 10;
		}
		System.out.println(sum);
	}

}
