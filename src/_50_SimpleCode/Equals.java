package _50_SimpleCode;

public class Equals {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
String s="hello";
String sw="Hello";
//String ss="Hello";
String s1=new String("Hello");
System.out.println(s.compareTo(sw));//s id 32 ascii val greater.
System.out.println(s==s1);//false
System.out.println(s.equals(s1));//true

System.out.println(s.concat(" Tendulkar"));//hello Tendulkar
System.out.println(s);//hello : immutable

	}

}
