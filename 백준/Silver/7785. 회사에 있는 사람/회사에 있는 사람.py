import sys
input = sys.stdin.readline
n = int(input())
dic = {}
for i in range(n):
    name, s = input().split()
    dic[name] = s
    if (s == 'leave'):
        del dic[name]
        
tmp = sorted(dic.items(), reverse=True)
dic = dict(tmp)
for i in dic.keys():
    print(i)