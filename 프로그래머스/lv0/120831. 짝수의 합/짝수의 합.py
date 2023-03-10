def solution(n):
    sum = 0
    # (시작, 끝, 증가폭)
    for x in range(2, n+1, 2):
        sum += x
    return sum