from collections import defaultdict
def solution(survey, choices):
    answer = []
    mark = ["RT","CF","JM","AN"]
    sH = defaultdict(int)
    for i in range(len(survey)):
        score = choices[i] - 4
        if score < 0:
            sH[survey[i][0]] -= score
        else:
            sH[survey[i][1]] += score
    
    for x in mark:
        if sH[x[0]] < sH[x[1]]:
            answer.append(x[1])
        else:
            answer.append(x[0])
    return "".join(answer)
        