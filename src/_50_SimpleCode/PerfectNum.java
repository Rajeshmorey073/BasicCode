package _50_SimpleCode;

public class PerfectNum {

	public static void main(String[] args) {
		/* (6,28 are Perfect number)
		 * Perfect number:- a positive integer that is equal to the sum of its proper
		 * divisors. The smallest perfect number is 6, which is the sum of 1, 2, and 3.
		 */	

		int num=28,sum=0;
		for(int i=1;i<=num/2;i++) {
			if(num%i==0)
				sum +=i;
		}
		if(sum==num)
			System.out.println(num+" is Perfect number");
		else
			System.out.println(num+" is not Perfect number");
	
	}

}
