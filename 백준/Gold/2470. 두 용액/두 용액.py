import sys
input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
A.sort()
ans = abs(A[0] + A[-1])
start = 0
end = N - 1
result = [A[start],A[end]]

while start < end:
    if abs(A[start] + A[end]) < ans:
        ans = abs(A[start] + A[end])
        result = [A[start], A[end]]
        if ans == 0:
            break
    if A[start] + A[end] < 0:
        start += 1
    elif A[start] + A[end] > 0:
        end -= 1
    else:
        break

print(result[0], result[1])
