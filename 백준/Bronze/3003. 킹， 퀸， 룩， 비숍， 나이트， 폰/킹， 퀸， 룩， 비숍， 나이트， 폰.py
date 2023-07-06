arr = [1,1,2,2,2,8]
N = list(map(int,input().split(" ")))
for i in range(len(N)):
    print(arr[i] - N[i],end=" ")