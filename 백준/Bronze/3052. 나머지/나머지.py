import sys
input = sys.stdin.readline
arr = []
arr1 = []
for i in range(10):
    arr.append(int(input()))

for i in arr:
    arr1.append(i % 42)

result = list(set(arr1))
print(result.__len__())