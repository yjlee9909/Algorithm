import java.io.IOException;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		int cnt = 0;
		int n = sc.nextInt();
		int arr[] = new int[n];
		for (int i = 0; i < n; i++) {
			arr[i] = sc.nextInt();
		}
		int v = sc.nextInt();
		
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] == v) {
				cnt += 1;
			}
		}
		System.out.println(cnt);

	}

}