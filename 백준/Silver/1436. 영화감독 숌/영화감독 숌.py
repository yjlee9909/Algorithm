N = int(input())
num = 666
cnt = 0
while True:
    if '666' in str(num):
        cnt += 1
        if cnt == N:
            break
    num += 1
print(num)