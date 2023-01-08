package _100Kisan;

import java.util.Scanner;

public class test 
{
	

		public static void main(String[] args) {
			Scanner sc=new Scanner(System.in);
			int a=sc.nextInt();
		    int i,j;

		    for(i=1;i<a;i++) {

		        for (j=1;j<=a-i;j++) {

		            System.out.print(" ");

		        }

		        for(j=1;j<=i;j++) {

		            System.out.print(j);

		        }

		        for(j=i-1;j>=1;j--) {

		            System.out.print(j);

		        }

		        System.out.println();

		    }

		    for(i=a;i>=1;i--) {

		        for(j=1;j<=a-i;j++) {

		            System.out.print(" ");

		        }

		        for(j=1;j<=i;j++) {

		            System.out.print(j);

		        }

		        for(j=i-1;j>=1;j--) {

		            System.out.print(j);

		        }

		        System.out.println();

		    }

		   }

		}





