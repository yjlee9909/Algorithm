import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
a = list(map(int, input().split()))
a.sort()
l = 0
r = N-1
cnt = 0
while (l < r):
    if (a[l] + a[r] < M):
        l += 1
    elif (a[l] + a[r] > M):
        r -= 1
    else:
        cnt += 1
        l += 1
        r -= 1
print(cnt)