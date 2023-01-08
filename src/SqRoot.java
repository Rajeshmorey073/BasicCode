

public class SqRoot {

	public static void main(String[] args) {
		int a=225,i;
		boolean flag=false;
		for(i=1;i<(a);i++) {
			if(i*i == a) {
			flag=true;
				break;
			}
		}
		if(flag==true)
		System.out.println("The Square root of "+a+" is: "+i);
		else
		System.out.println("Pls enter perfect square value");

	}

}
