N = int(input())
level = 1
num = 1
while (N > num):
    num += level*6
    level +=1
print(level)