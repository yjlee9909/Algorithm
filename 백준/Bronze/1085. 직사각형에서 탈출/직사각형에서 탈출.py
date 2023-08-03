x,y,w,h = map(int,input().split())
print(min(x,h-y,w-x,y))