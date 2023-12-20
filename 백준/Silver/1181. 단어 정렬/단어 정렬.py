import sys
input = sys.stdin.readline

N = int(input())
A=[]
for i in range(N):
    A.append(input().strip())
setA = list(set(A))
setA.sort()
setA.sort(key = len)
for i in setA:
    print(i)