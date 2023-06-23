import sys
input = sys.stdin.readline
N = int(input())
arr = list(map(int,input().split(' ')))
M = max(arr)
new_arr = []
sum = 0
for i in arr:
    new_arr.append(i/M*100)
for i in new_arr:
    sum += i
print(sum/N)