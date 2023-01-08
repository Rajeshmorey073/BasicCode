package synatx;

//public class MainClass {
//	private static String fName;// '.' its private it can initialise by obj, if pure static then cant modify
//	private static String lName;
//
//	public static String getlName() {
//		return lName;
//	}
//
//	public static void setlName(String lName) {
//		MainClass.lName = lName;
//	}
//
//	public MainClass() {
//
//	}
//
//	@SuppressWarnings("static-access")
//	public MainClass(String fName, String lName) {//if same name jvm conflict and we need pass this, o/w give sperate name than class attribute.
//	
//		this.fName = fName;
//		this.lName = lName;
//	}
//
//	public static void Show() {
//		System.out.println(fName + " " + lName);
//	}
//
//	static void setfName(String name) {
//		fName=name;
//	}
//	String getfName() {
//		return fName;
//	}
//	public static void main(String[] args) {
//		MainClass m1 = new MainClass("rajesh","more");
//		MainClass.setfName("Rajesh");//'.' static method: call by class
//		m1.getfName();
//		MainClass.Show();
//
//	}
//
//}


class MainClass{
	private String name;
	private int age;
	private String gender;
	public MainClass() {
		// TODO Auto-generated constructor stub
	}
	MainClass(String name1,String gender1){
		name=name1;
		gender=gender1;
		
	}
	void setName(String name) {
		this.name=name;
	}
	
	 public void show() {
		
		System.out.println("Name: "+name+" age:"+age+" gender: "+gender);
		
	}
	
	public static void main(String[] args) {
		MainClass obj=new MainClass();
		System.out.println();
		obj.setName("sohel");
		obj.show();
	}
}