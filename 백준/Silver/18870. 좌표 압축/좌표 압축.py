import sys
input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
setA = sorted(list(set(A)))
dicA = {
    setA[i] : i for i in range(len(setA))
}
for i in A:
    print(dicA[i], end=' ')