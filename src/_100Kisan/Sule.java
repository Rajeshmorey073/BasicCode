package _100Kisan;



class Sule
{
	public static void main(String[] args) {
		
	
	boolean flag=true;
	int[] a= {1,1};
	int i=1,cnt=1;
	while(flag==true){
		if((a[0]%2==0) && (a[1]%2==0)) {
			flag = false;
		}
		if(a[0]%2!=0 ) {
			a[0]+=i;
			cnt++;
		}
		if(a[1]%2!=0) {
			a[1]+=i;
			cnt++;
		}
		i++;

	}
	System.out.println(cnt+" ");

}
	
}