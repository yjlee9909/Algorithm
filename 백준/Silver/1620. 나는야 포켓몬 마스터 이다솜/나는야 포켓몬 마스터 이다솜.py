import sys
input = sys.stdin.readline
N, M = map(int,input().split())
dit = {}
dit2 = {}
for i in range(N):
    name = input().strip()
    dit[name] = i + 1
    dit2[i+1] = name

for i in range(M):
    ans = input().strip()
    if (ans.isdecimal()):
        print(dit2[int(ans)])
    else:
        print(dit.get(ans))