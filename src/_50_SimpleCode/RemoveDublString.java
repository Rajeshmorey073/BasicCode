package _50_SimpleCode;

import java.util.HashSet;
import java.util.LinkedHashSet;

public class RemoveDublString {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str = "irajarajaraji";
		StringBuilder s = new StringBuilder();
		char[] c = str.toCharArray();
		for (int i = 0; i < str.length(); i++) {
			char cc = c[i];// a,3
			boolean flag = true;
			for (int j = i + 1; j < str.length(); j++)// 0-m,1-a
			{
				if (cc == c[j])
					flag = false;
			}
			if (flag == true)
				s.append(cc);
		}
		System.out.println(s);

		// OR

		StringBuilder sb = new StringBuilder();
		HashSet<Character> set = new LinkedHashSet<Character>();// if we use hashSet then str get asc order so to stay
																// as it is use linkHashSet.
		for (int i = 0; i < str.length(); i++) {
			char x = str.charAt(i);
			set.add(x);
		}
		for (char c1 : set) {
			sb.append(c1);
		}
		System.out.println(sb);
	}
}
