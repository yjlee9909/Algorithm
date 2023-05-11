A = int(input())
B = input()

for i in range(len(B), 0, -1):
    print(A * int(B[i-1]))
print(A * int(B))