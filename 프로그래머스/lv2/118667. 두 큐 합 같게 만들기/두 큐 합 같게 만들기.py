from collections import deque
def solution(queue1, queue2):
    answer = 0
    q1 = deque(queue1)
    q2 = deque(queue2)
    s1 = sum(queue1)
    s2 = sum(queue2)
    sumN = s1 + s2
    p1, p2 = 0, 0
    if sumN % 2 == 1:
        return -1
    sumN = sumN // 2
    limit = len(queue1)*2
    while p1 < limit and p2 < limit:
        if sumN == s1:
            return p1 + p2
        if s1 > sumN:
            s1 -= q1[0]
            s2 += q1[0]
            q2.append(q1.popleft())
            p1 += 1
        else:
            s1 += q2[0]
            s2 -= q2[0]
            q1.append(q2.popleft())
            p2 += 1
    return -1
        
        
