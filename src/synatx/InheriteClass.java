package synatx;


public class InheriteClass {
	public static void main(String[] args) {
		Person p1=new Student("Rajesh", "More", 121, "SVERI");
	System.out.println(p1.toString());
	}
}

class Person {
	protected String name;
	protected String surName;

	public Person(String name, String surName) {
		this.name = name;
		this.surName = surName;
	}

	@Override
	public String toString() {
		return "Person [name=" + name + ", surName=" + surName + "]";
	}

}

class Student extends Person {
	private int rollNo;
	private String college;

	public Student(String name, String surName, int rollNo, String college) {
		super(name, surName);
		this.college = college;
		this.rollNo = rollNo;
	}
	
	@Override
	public String toString() {
		return "Student [Name="+name+", Surname="+surName+", rollNo=" + rollNo + ", college=" + college + "]";
	}

	void show(){
		System.out.println(name+" "+surName+" "+rollNo+" "+college);
	}
}