T = int(input())
for _ in range(T):
    C = int(input())
    ans = [0,0,0,0]
    changes = [25,10,5,1]
    for i in range(len(changes)):
        ans[i] += C // changes[i]
        C %= changes[i]
    print(*ans)