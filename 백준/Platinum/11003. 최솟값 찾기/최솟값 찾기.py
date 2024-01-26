import sys
input = sys.stdin.readline
from collections import deque

N, L = map(int, input().split())
A = list(map(int, input().split()))
mydeque = deque()

for i in range(N):
    # 아이디어1 : 나보다 큰 데이터 삭제하기
    while mydeque and mydeque[-1][0] > A[i]:
        mydeque.pop()
    mydeque.append((A[i], i))
    # 아이디어2 : 슬라이딩 윈도우 벗어난 데이터 삭제하기
    if mydeque[0][1] <= i - L:
        mydeque.popleft()
    print(mydeque[0][0], end=' ')