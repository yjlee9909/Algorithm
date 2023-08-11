a1, a0 = map(int, input().split())
c = int(input())
n0 = int(input())
answer = 1 if a1*n0 + a0 <= c*n0 and c >= a1 else 0
print(answer)