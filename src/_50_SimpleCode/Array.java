package _50_SimpleCode;

public class Array {

	public static void main(String[] args) {
		String[] arr = {  "Daud","Sohel","Avia","Pratap","raj"};
		int cnt=0;
		for(int i=0;i<arr.length;i++) {
			String str=arr[i];
			char[] c=str.toCharArray();
			char c1=Character.toLowerCase(c[0]);
			char c2=Character.toLowerCase(c[c.length-1]);
			if(c1==c2) 
				cnt++;			
		}
System.out.println(cnt);
	}
}
