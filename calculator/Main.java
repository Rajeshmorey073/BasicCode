package calculator;

public abstract class Main {
	private double a;
	private double b;
	private String sign;

	public Main(double a, double b, String sign) {
		super();
		this.a = a;
		this.b = b;
	
		this.sign = sign;
	}

	public Main() {
		// TODO Auto-generated constructor stub
	}

	public abstract double name(double a, double b);
	
}
