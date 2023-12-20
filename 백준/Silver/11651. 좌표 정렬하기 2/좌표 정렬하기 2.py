import sys
input = sys.stdin.readline

N = int(input())
A = []
for i in range(N):
    x, y = list(map(int, input().split()))
    a = [x,y]
    A.append(a)
A.sort(key=lambda x : (x[1],x[0]))
for i,j in A:
    print(i,j)