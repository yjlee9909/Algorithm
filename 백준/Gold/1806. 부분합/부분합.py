import sys
input = sys.stdin.readline

N, S = map(int,input().split())
A = list(map(int, input().split()))
temp = A[0]
result = 100001
start, end = 0,0
while start <= end:
    if temp >= S:
        result = min(result, end - start + 1)
        temp -= A[start]
        start += 1
    else:
        end += 1
        if end < N:
            temp += A[end]
        else:
            break
print(result if result != 100001 else 0)