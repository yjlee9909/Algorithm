from collections import defaultdict
def solution(name, yearning, photo):
    answer = []
    sH = defaultdict(int)
    for i in range(len(name)):
        sH[name[i]] = yearning[i]
    
    for listN in photo:
        sumN = 0
        for x in listN:
            sumN += sH[x]
        answer.append(sumN)
    return answer