package _100Kisan;

import java.util.Arrays;
import java.util.Scanner;

public class TryArraySort {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("enter word");
	String word=sc.next();
	
	sc.close();
	char[] c=word.toCharArray();
	int cnt=0;
	for (char d : c) {
		if(d==',')
			cnt++;
	}
	//System.out.println(cnt);
	String[] arr=new String[cnt+1];
	arr=word.split(",");
	Arrays.sort(arr);
		StringBuilder str=new StringBuilder();
		for(int i=0;i<=cnt;i++) {
			str.append(arr[i]);
			str.append(",");
		}
		//System.out.println(word);
		str.deleteCharAt(str.length() - 1);
		System.out.println(str);
	}

}
