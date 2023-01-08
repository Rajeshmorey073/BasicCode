package _50_SimpleCode;

public class SqRoot {

	public static void main(String[] args) {
		int a=225,sqRoot=0,i;
		boolean flag=true;
		while(flag) {
		for(i=1;i<(a);i++) {
			if(i*i == a) {
				sqRoot=i;
			flag=false;
			}
		}
			
		
		}
		if(flag==false)
		System.out.println("The Square root of "+a+" is: "+sqRoot);
		else
		System.out.println("Pls enter perfect square value");

	}

}
