package synatx;

 class Diff {
	void test() {
		System.out.println("there is no test");
	}
}
class Mango extends Diff{
	@Override//use:You’ll get a compile-time error if the programmer makes a mistake while overriding, such as using the wrong method name or parameter types.
	void test() {
		System.out.println("there is sweet test");
	}
}

class Overriding1
{
	public static void main(String[] args) {
		Diff d1=new Diff();
		d1.test();
		Diff d2=new Mango();//upcasting 
		d2.test();
	}
}
