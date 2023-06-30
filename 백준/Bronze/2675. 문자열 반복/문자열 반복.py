T = int(input())
for i in range(T):
    n, s = input().split(" ")
    for j in s:
        print(j * int(n), end = "")
    print()