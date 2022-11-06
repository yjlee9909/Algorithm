def solution(n):
    for answer in range(1, 1000):
        if (answer * 6) % n == 0:
            return answer
    return answer