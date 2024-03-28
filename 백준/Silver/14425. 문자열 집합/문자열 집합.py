import sys

input = sys.stdin.readline
N, M = map(int, input().split())
S = set()
cnt = 0
for _ in range(N):
    data = input().strip()
    S.add(data)

for _ in range(M):
    data = input().strip()
    if data in S:
        cnt += 1
print(cnt)