import sys
input = sys.stdin.readline

N, S = map(int,input().split())
A = list(map(int, input().split()))
num = sum(A[:S])
maxNum = [num]
for i in range(len(A)-S):
    num = num - A[i] + A[i+S]
    maxNum.append(num)
print(max(maxNum))