import sys

input = sys.stdin.readline
N = int(input())
arr = list(map(int,input().split()))
M = int(input())
arrN = list(map(int, input().split()))

ans = {}
for i in arr:
    if i in ans:
        ans[i] += 1
    else:
        ans[i] = 1

for j in arrN:
    result = ans.get(j)
    if result == None:
        print(0, end=' ')
    else:
        print(result, end=" ")