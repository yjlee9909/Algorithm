def solution(numbers, hand):
    left = 10
    right = 11
    answer = []
    dist = [[0, 0, 3, 0, 0, 2, 0, 0, 1, 0],
[4, 0, 1, 0, 0, 2, 0, 0, 3, 0],
[3, 0, 0, 0, 0, 1, 0, 0, 2, 0],
[4, 0, 1, 0, 0, 2, 0, 0, 3, 0],
[3, 0, 2, 0, 0, 1, 0, 0, 2, 0],
[2, 0, 1, 0, 0, 0, 0, 0, 1, 0],
[3, 0, 2, 0, 0, 1, 0, 0, 2, 0],
[2, 0, 3, 0, 0, 2, 0, 0, 1, 0],
[1, 0, 2, 0, 0, 1, 0, 0, 0, 0],
[2, 0, 3, 0, 0, 2, 0, 0, 1, 0],
[1, 0, 4, 0, 0, 3, 0, 0, 2, 0],
[1, 0, 4, 0, 0, 3, 0, 0, 2, 0]]
    for i in numbers:
        if i in [1, 4, 7]:
            left = i
            answer.append('L')
        elif i in [3, 6, 9]:
            right = i
            answer.append('R')
        else:
            if dist[left][i] < dist[right][i]:
                left = i
                answer.append('L')
            elif dist[left][i] > dist[right][i]:
                right = i
                answer.append('R')
            elif hand == "left":
                left = i
                answer.append('L')
            else:
                right = i
                answer.append('R')
    return "".join(answer)