package synatx;

public class OverloadingAdd {

	public double add(int e, int f) {
		double sum = e + f;
		System.out.println(sum);
		return sum;
	}

	public double add(double e, double f) {
		double sum = e + f;
		System.out.println(sum);
		return sum;
	}

	public double add(int a, int b, int c) {
		double sum = a + b + c;
		System.out.println(sum);
		return sum;
	}

	public double add(double e, int f) {
		double sum = e + f;
		System.out.println(sum);
		return sum;
	}

	public String add(int e) {
		String str = "you just enter one val, pls add some more";
		System.out.println(str);
		return str;
	}

	public static void main(String[] args) {

		OverloadingAdd o = new OverloadingAdd();
		o.add(1);
		o.add(12, 23);
		o.add(12.3, 45);
		o.add(12, 234.3);

	}

}
