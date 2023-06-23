import sys
input = sys.stdin.readline
arr = []
for i in range(28):
    arr.append(int(input()))

for i in range(1, 31):
    if i not in arr:
        print(i)