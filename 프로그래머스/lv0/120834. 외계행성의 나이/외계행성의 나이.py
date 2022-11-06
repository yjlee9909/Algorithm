def solution(age):
    answer = ''
    for i in str(age):
        answer += str(chr(int(i) + 97))
    return answer