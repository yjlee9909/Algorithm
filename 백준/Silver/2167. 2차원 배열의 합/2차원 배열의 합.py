import sys
input = sys.stdin.readline

N, M = map(int, input().split())
A = [[0] * (M+1)]
D = [[0] * (M+1) for _ in range(N+1)]

for i in range(N):
    A_row = [0] + [int(x) for x in input().split()]
    A.append(A_row)

for i in range(1,N+1):
    for j in range(1,M+1):
        D[i][j] = D[i-1][j] + D[i][j-1] - D[i-1][j-1] + A[i][j]

K = int(input())
for _ in range(K):
    i,j,x,y = map(int, input().split())
    result = D[x][y] - D[x][j-1] - D[i-1][y] + D[i-1][j-1]
    print(result)