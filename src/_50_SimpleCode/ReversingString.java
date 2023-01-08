package _50_SimpleCode;
 
import java.util.Scanner;

public class ReversingString {
	public static void main(String[] args) {
		
	
	Scanner sc=new Scanner(System.in);
	System.out.println("enterString");
	String a=sc.next(),str="";//sohel
	int b=a.length();
	sc.close();
	for(int i=b-1;i>=0;i--) {
		char c=a.charAt(i);
		str=str+c;//le
	}
System.out.println(str);
}
}