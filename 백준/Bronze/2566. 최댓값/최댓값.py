arr = [list(map(int, input().split())) for _ in range(9)]
maxN = 0
maxR, maxC = 0,0
for i in range(9):
    for j in range(9):
        if maxN <= arr[i][j]:
            maxR = i + 1
            maxC = j + 1
            maxN = arr[i][j]
print(maxN)
print(maxR, maxC)