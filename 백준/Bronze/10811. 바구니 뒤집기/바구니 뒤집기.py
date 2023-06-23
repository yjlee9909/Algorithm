import sys
input = sys.stdin.readline
N,M = map(int, input().split(" "))
arr = [i+1 for i in range(N)]

for k in range(M):
    i, j = map(int, input().split(" "))
    arr1 = arr[i - 1 :j]
    arr1.reverse()
    arr[i-1:j] = arr1
for i in range(N):
    print(arr[i],end=" ")