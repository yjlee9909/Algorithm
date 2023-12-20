import sys
input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
x = int(input())
A.sort()
cnt = 0
start = 0
end = N - 1
while start < end:
    if A[start] + A[end] == x:
        cnt += 1
        start += 1
        end -= 1
    elif A[start] + A[end] < x:
        start += 1
    else:
        end -= 1
print(cnt)
