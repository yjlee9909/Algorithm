import sys
input = sys.stdin.readline

N, M = map(int,input().split())
a = list(map(int,input().split()))
count= 0
start_idx, end_idx = 0, 1
while(end_idx <= N and start_idx <= end_idx):
    sum_list = a[start_idx:end_idx]
    total = sum(sum_list)
    if total == M:
        count += 1
        end_idx += 1
    elif total < M:
        end_idx += 1
    else:
        start_idx += 1
print(count)