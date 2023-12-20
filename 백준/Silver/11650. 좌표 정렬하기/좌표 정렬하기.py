import sys
input = sys.stdin.readline

N = int(input())
A = []
for i in range(N):
    x, y = list(map(int, input().split()))
    a = [x,y]
    A.append(a)
A.sort()
for i,j in A:
    print(i,j)