import sys
input = sys.stdin.readline
N, M = list(map(int, input().split(" ")))
arr = [i+1 for i in range(N)]

for _ in range(M):
    i, j = list(map(int, input().split(" ")))
    k = arr[i-1]
    l = arr[j-1]
    arr[i-1] = l
    arr[j-1] = k
for l in range(N):
    print(arr[l], end=" ")