from collections import Counter
def solution(participant, completion):
    sH = Counter(participant)
    for i in completion:
        if i in sH:
            sH[i] -= 1
    for i in sH:
        if sH[i] == 1:
            return i