package _100Kisan;

public class Mamu {
public static int fact(int num) {
	int i,a=num,sum=1;
	
	for(i=a;i>0;i--) {
		sum *= i;
	}
	return sum;
}
	public static void main(String[] args) {
		int n=3;
		int r=2;
		int m=1000000009;
		int nf=fact(n);
		int rf=fact(r); 
		int sub=n-r;
		int subf=fact(sub);
		int res=nf/(rf*subf)%m;
		System.out.println(res);
		
	}

}
