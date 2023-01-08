package _50_SimpleCode;

public class RemoveRepeatedOK {
	static int removeDublicate(int arr[], int n) {
		if(n==0||n==1)
			return n;
		int temp[]=new int[n];//n=5
		int j=0;
		for(int i=0;i<n-1;i++) {//[1 2 3 3 4] i=0 1 2 3 4
			if(arr[i]!=arr[i+1])//1!=2,2!=3,3==3,3!=4
				temp[j++]=arr[i];//[1 2 3
		}
	     temp[j++] = arr[n - 1];//4
	     for(int i=0;i<j;i++)
	     arr[i]=temp[i];
	     return j;
	}
	
	public static void main(String[] args) {
		int arr[]= {1,2,2,2,3,4,4,5};
		int n=arr.length;
		n=removeDublicate(arr, n);
		for(int i=0;i<n;i++)
			System.out.println(arr[i]+" ");
	}

}
