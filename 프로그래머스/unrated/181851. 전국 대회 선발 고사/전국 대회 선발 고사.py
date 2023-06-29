def solution(rank, attendance):
    answer = 0
    res = []
    for i in range(len(rank)):
        if attendance[i]:
            res.append([rank[i],i])
    res.sort(key = lambda v : v[0])
    answer += res[0][1]*10000
    answer += res[1][1]*100
    answer += res[2][1]
    return answer