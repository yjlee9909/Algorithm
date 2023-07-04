import sys
input = sys.stdin.readline
from collections import Counter
a = dict(Counter(input().upper().strip()))
result = []
for i in a.keys():
    if a[i] == max(a.values()):
        result.append(i)
if len(result) > 1:
    print("?")
else:
    print(result[0])