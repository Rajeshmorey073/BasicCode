package _100Kisan;

public class Societe {

	public static void main(String[] args) {
		String str = "471";
		int x = 47, sum = 0;
		
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < str.length(); i++) {
			int j = 0;
			while (j <= i) {
				sb.append(str.charAt(j));
				j++;
			}
			if (i < str.length() - 1)
				sb.append(",");
		}
		
		String str1 = sb.toString();
		String[] arr = str1.split(",");

		for (int i = 0; i < arr.length; i++) {
			if (Integer.parseInt(arr[i]) > x)
				sum += Integer.parseInt(arr[i]);
		}
		System.out.println("Ans: "+sum);
		//System.out.println((122 + 1222));
	}

}
