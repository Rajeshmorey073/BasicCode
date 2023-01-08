package _50_SimpleCode;
import java.util.Scanner;
public class Datametica {
	static int calResult(String[] arr) {
		int i=0,cnt=0;
		String str="";
		for(i=0;i<arr.length;i++) {
			str=arr[i];
			char[] c=str.toCharArray();
			char c1=Character.toLowerCase(c[0]);
			char c2=Character.toLowerCase(c[c.length-1]);
			if(c1==c2) 
				cnt++;
				}
		return cnt;
	}
static String[] initilizeArray(int size) {
	Scanner sc=new Scanner(System.in);
	String[] arr=new String[size];
	for(int i=0;i<size;i++) {
		arr[i]=sc.next();
	}
	sc.close();
	return arr;
}
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("enter size if array");
		int size=sc.nextInt();
		String[] arr=initilizeArray(size);
		System.out.println(calResult(arr));
		sc.close();
	}
	
}
