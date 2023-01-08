package _50_SimpleCode;

public class RemoveSpaceStr {
	static String removeSpace(String str) {
		StringBuilder str1=new StringBuilder();	
		char[] c = str.toCharArray();
		for (int i = 0; i < c.length; i++) {
			if (c[i] != ' ')
				str1.append(c[i]);
		}
		String s=str1.toString();
		return s;
	}

	public static void main(String[] args) {
//			String str1=str.replaceAll(" ", "");
//			System.out.println(str1);

		String str = "Raj es h_M o re";
		System.out.println(removeSpace(str));
	}

}
