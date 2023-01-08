package synatx;

public class DS_SelectionSort {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] a = { 10, 9, 7, 101, 23, 44, 12, 78, 34, 23 };
		int i,  pos, temp;
		for (i = 0; i < 10; i++) {
			pos = smallest(a, 9, i);
			temp = a[i];
			a[i] = a[pos];
			a[pos] = temp;
		}
		for (int l : a) {
			System.out.println(l);
		}
	}

	private static int smallest(int[] a, int n, int c) {
		int small, pos, j;
		small = a[c];
		pos = c;
		for (j = c + 1; j < 10; j++) {
			if (a[j] < small) {
				small = a[j];
				pos = j;
			}
		}
		return pos;

	}
}
