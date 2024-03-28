import sys
input = sys.stdin.readline
N = int(input())
temp = list(map(int,input().split()))
M = int(input())
temp2 = list(map(int, input().split()))
dic = {}

for i in temp2:
    dic[i] = 0
for j in temp:
    if j in dic:
        dic[j] = 1
for k in dic:
    print(dic[k], end = ' ')