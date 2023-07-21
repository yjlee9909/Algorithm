N, B = map(int,input().split(" "))
ans = ""
while N!=0:
    a = N % B
    if a >= 10:
        ans += chr(a + 55)
    else:
        ans += str(a)
    N //= B
print(ans[::-1])