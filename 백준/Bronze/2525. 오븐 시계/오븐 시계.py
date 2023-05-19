A, B = map(int, input().split(' '))
C = int(input())
h = int((A * 60 + B + C) / 60)
if(h > 23):
    h = h-24
m = int((A * 60 + B + C) % 60)
print(h, m)