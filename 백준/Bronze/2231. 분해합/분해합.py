n = int(input())
for i in range(1, n+1):
    num = sum((map(int, str(i))))
    sumNum = i + num
    if sumNum == n:
        print(i)
        break
    if i == n:
        print(0)