package _50_SimpleCode;
public class SingletonClass {
	private static SingletonClass s = null;  
	 static String name="raj";
    public static SingletonClass getInstance()  
	{    
	if (s== null)   
	s = new SingletonClass();   
	return s;   
	}  
	public static void main(String[] args) {
		SingletonClass a = SingletonClass.getInstance();   
		SingletonClass b = SingletonClass.getInstance();
		SingletonClass c = SingletonClass.getInstance();   
		
		System.out.println(a); //will give same instance
		System.out.println(b);
		System.out.println(c);
	}

}
