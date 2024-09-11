import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());

		int cnt = 1;
		int s_index = 1;
		int e_index = 1;
		int sum = 1;
		while (e_index != N) {
			if (sum == N) {
				cnt++;
				e_index++;
				sum = sum + e_index;
			} else if (sum > N) {
				sum = sum - s_index;
				s_index++;
			} else {
				e_index++;
				sum = sum + e_index;
			}
		} 
		System.out.println(cnt);

	}

}
