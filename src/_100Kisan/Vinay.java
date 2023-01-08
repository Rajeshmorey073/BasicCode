package _100Kisan;

import java.util.Scanner;

public class Vinay {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner sc=new Scanner(System.in);
System.out.println("Enter num");
int a=sc.nextInt(),cnt=0,sum=1,check=0;
boolean flag=true;
while(flag) {
	 sum=sum*2;
	cnt++;
	if(sum==a) {
		check=1;
		flag=false;}
	if(sum>a)
		flag=false;
}
if(check==1)
	System.out.println(cnt);
else
	System.out.println("-1");
sc.close();
	}

}
