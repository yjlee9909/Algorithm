import math

def solution(my_str, n):
    answer = []
    for i in range(math.ceil(len(my_str)/n)):
        answer.append(my_str[n * i : n * (i+1)])
    return answer