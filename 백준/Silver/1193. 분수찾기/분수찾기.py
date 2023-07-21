N = int(input())
level = 1
while N > level:
    N -= level
    level += 1
if level % 2 == 0:
    up = N
    down = level - N + 1
else:
    up = level - N + 1
    down = N
print(up,'/',down,sep="")