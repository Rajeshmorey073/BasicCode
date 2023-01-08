package _100Kisan;

public class Method {
	Method() {
		System.out.println("Constructor method is called when an object of it's class is created"+"\n");}
	public static void main(String[] args) {
		staticMethod();//called without instance/obj
		Method object = new Method();
		object.nonStatic();//called by instance/obj
	
	}
	
	static void staticMethod(){
		System.out.println("Static method can be called without creating object"+"\n");
	}
	void nonStatic() {
		System.out.println("Non static method must be called by creating an object");
	}
	static {
		System.out.println("Static block execute beore main method"+"\n");
	}
}
