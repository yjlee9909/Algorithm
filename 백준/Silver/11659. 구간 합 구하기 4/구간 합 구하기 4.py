import sys
input = sys.stdin.readline
N, M = map(int, input().split())
numbers = list(map(int, input().split()))
sumNumbers = [0] # 합 배열 선언
temp = 0 # 임시 변수 선언

for i in numbers:
    temp += i
    sumNumbers.append(temp)

for k in range(M):
    i, j = map(int, input().split())
    print(sumNumbers[j] - sumNumbers[i - 1])