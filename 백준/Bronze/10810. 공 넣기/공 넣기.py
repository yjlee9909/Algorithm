import sys
input = sys.stdin.readline
N, M = list(map(int, input().split(" ")))
arr = [0 for _ in range(N)]
for _ in range(M):
    i,j,k = map(int, input().split(" "))
    for l in range(i, j+1):
        arr[l-1] = k
for l in range(N):
    print(arr[l], end=" ")