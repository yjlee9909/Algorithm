import sys
input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
A.sort()
cnt = 0

for k in range(N):
    find = A[k]
    start = 0
    end = N - 1
    while start < end:
        sum = A[start] + A[end]
        if (sum < find):
            start += 1
        elif sum > find:
            end -= 1
        else:
            if start != k and end != k:
                cnt += 1
                break
            if start == k:
                start += 1
            elif end == k:
                end -= 1
            
print(cnt)
