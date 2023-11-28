import sys
input = sys.stdin.readline
N = int(input())
list = []
for i in range(N):
    list.append(int(input()))

for i in sorted(list):
    print(i)