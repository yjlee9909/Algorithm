import sys
input = sys.stdin.readline
N = int(input())
arr = list(map(int, input().split(" ")))
v = int(input())
print(arr.count(v))