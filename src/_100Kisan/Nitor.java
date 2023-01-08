package _100Kisan;

class Nitor {

	public static void main(String[] args) {
		String sample = "Raj1e3 mo32re Th2er5 a8e mem9eb8e ag76sbju kh8s f9ds9";
		char c[] = sample.toCharArray();
		StringBuilder sb = new StringBuilder();
//Convert to numeric array
		for (char c1 : c) {
			if (Character.isDigit(c1))
				sb.append(c1);
			if (c1 == ' ')
				sb.append(",");

		}
		String str = sb.toString();
		String[] arr = str.split(",");
//Print Array		
				for (String s1 : arr) {
					System.out.print(s1 + ",");
				}
//Find Avg of Nums		
		float sum = 0;
		for (int i = 0; i < arr.length; i++) {
			sum = sum + Integer.parseInt(arr[i]);
		}
		System.out.println();
		System.out.println("Average :" + sum / arr.length);
//Find BIg Num in string
		int bigNum = Integer.parseInt(arr[0]);
		for (int i = 0; i < arr.length - 1; i++) {
			if (bigNum < Integer.parseInt(arr[i + 1]))
				bigNum = Integer.parseInt(arr[i + 1]);
		}
		System.out.println("Big Num is :" + bigNum);

	}

}
