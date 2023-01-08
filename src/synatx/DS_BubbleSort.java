package synatx;

public class DS_BubbleSort {
	static int[] swap(int[] arr,int a,int b) {
		int temp=arr[b];
		arr[b]=arr[a];
		arr[a]=temp;
		return arr;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arr = { 3, 5, 4, 2, 43, 2, 451 };
		int temp = 0;
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < arr.length - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					//arr= swap(arr,j,j+1);
					temp = arr[j + 1];			
					arr[j + 1] = arr[j];
					arr[j] = temp;
				}
			}
		}

		for (int i : arr) {
			System.out.println(i);
		}
	}

}
