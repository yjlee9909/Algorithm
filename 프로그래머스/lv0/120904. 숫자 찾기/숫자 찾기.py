def solution(num, k):
    num = str(num)
    k = str(k)
    if not k in num:
        answer = -1
    else:
        answer = num.find(k) + 1
    return answer