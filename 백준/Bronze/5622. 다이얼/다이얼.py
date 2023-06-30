s = list(input())
dials = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']
result = 0
for i in s:
    for j in dials:
        if i in str(j):
            num = dials.index(j) + 3
            result += num
print(result)