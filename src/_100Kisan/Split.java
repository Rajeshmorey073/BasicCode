package _100Kisan;

public class Split {

	public static void main(String[] args) {
		String s = "How are you my boy.";
		String[] w=s.split(" ");
		for (String str : w) {
			System.out.print(str+" ");
		}
		System.out.println();
		String re=s.replace("boy", "girl");
		System.out.println(re);
		String s1="Yash";
		System.out.println(s1.toLowerCase());
	}

}
