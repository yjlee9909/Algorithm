
import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		
		int n = Integer.parseInt(br.readLine());
		int m = Integer.parseInt(br.readLine());
		
		// 3번째 줄 입력 읽기
		StringTokenizer st = new StringTokenizer(br.readLine());
		int[] arr = new int[n];
		for (int i = 0; i < n; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		Arrays.sort(arr);
		
		int s_index = 0;
		int e_index = n - 1;
		int cnt = 0;
		
		while (s_index < e_index) {
			if (arr[s_index] + arr[e_index] < m) {
				s_index++;
			} else if (arr[s_index] + arr[e_index] > m) {
				e_index--;
			} else {
				cnt++;
				s_index++;
				e_index--;
			}
			
		}
		
		System.out.println(cnt);

	}

}
