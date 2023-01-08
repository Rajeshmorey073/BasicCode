package _100Kisan;

public class CompaireStr {

	public static void main(String[] args) {
		String s1 = "Rajesh", s2 = "rRajesh";
		if(s1.compareTo(s2)>0)
			System.out.println(s1+" is greater than "+s2);
		else if(s1.compareTo(s2)<0)
			System.out.println(s2+" is greater than "+s1);
		else
			System.out.println("Both str are equals..!!");
	}

}
