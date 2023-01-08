package _50_SimpleCode;

//import java.util.Arrays;

public class DuplicateCharacters {
	
//	static boolean checkChar(String New, String s) {
//		char str[] = New.toCharArray();
//		if(Arrays.asList(str).contains(s))
//			return true;
//		return false;
//		
//	}

	public static void main(String[] args) {
		String str1 = "Great responsibility";
		int cnt;

		// Converts given string into character array
		char str[] = str1.toCharArray();
	//	System.out.println(str[1]);
		System.out.println("Duplicate characters in a given string: ");
		for (int i = 0; i < str.length; i++) {// r
			cnt = 1;
			for (int j = i + 1; j < str.length; j++) {//r
				if (str[i] == str[j] && str[i] != ' ')
					cnt++;
			}
			if (cnt > 1 && str[i] != '0') {
				//New=New+str[i];
				
				System.out.println(": "+str[i]);
			}
		}

	}

}
