package _50_SimpleCode;

public class Fibonacci_series {

	public static void main(String[] args) {
		// Def:	a	series	of	numbers	in	which	each	number	(	Fibonacci number	)	is	the	sum	of	the	two	
		//preceding	numbers.	The	simplest	is	the	series	1,	1,	2,	3,	5,	8...	etc.	
			int i,a=0,b=1,c,cnt=20;
			System.out.println(a+" ");
			System.out.println(b);
			for(i=2;i<cnt;i++) {
				c=a+b;//3
				System.out.println(c);
				a=b;b=c;
			}
		}
}
