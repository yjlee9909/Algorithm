import sys
input = sys.stdin.readline

N = int(input())
sum = 1
count = 1
start_idx = 1
end_idx = 1

while end_idx != N:
    if sum == N:
        count += 1
        end_idx += 1
        sum += end_idx
    elif sum > N:
        sum -= start_idx
        start_idx += 1
    else: # sum < N
        end_idx += 1
        sum += end_idx
print(count)

