def solution(array, n):
    value = sorted(array, key=lambda x:abs(n-x))
    if abs(value[0] - n) == abs(value[1] - n):
        return min(value[0], value[1])
    return sorted(array, key=lambda x:abs(n-x))[0]