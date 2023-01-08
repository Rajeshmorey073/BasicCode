package _100Kisan;

public class New {

	static public int powerVal(int base, int power) {
		int sum1 = 1;
		for (int i = 1; i <= power; i++) {
			sum1 = sum1 * base;
		}
		return sum1;
	}

	static public int maxVal(int[] arr) {
		int bigNum = arr[0];
		for (int i = 0; i < arr.length - 1; i++) {
			if (bigNum < arr[i + 1])
				bigNum = arr[i + 1];
		}
		return bigNum;
	}

	public static void main(String[] args) {

		// f = ((5*5*5*5)) % (1000000007); // Now f never can

		int[] arr = { 3, 5, 4, 5, 2, 10 };
		int[] arr1 = new int[arr.length - 1];
		for (int i = 0; i < arr.length - 1; i++) {
			int a = (powerVal(arr[i], arr[i + 1]) % 1000000007);
			arr1[i] = a;
		}
		for (int i : arr1) {
			System.out.println(i);
		}
		int val = maxVal(arr1);
		System.out.println("max val; " + val);
		System.out.println(arr1[4]);
		int i = 0, cnt = 0;
		int index = 0;
		for (i = 0; i < arr1.length; i++) {
			if (cnt == 0) {
				if (val == arr1[i]) {
					index = i;
					cnt++;
				}
			}

		}
		System.out.println(index);
	}
}
