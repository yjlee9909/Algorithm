# 보드 전체 격자 수 5*5 에서 위험지역 카운팅하기 25 - 위험지역 = 안전지역
# 위험 지역 2로 카운팅
def solution(board):
    n = len(board)
    answer = n*n
    cnt = 0
    dr = [-1,-1,0,1,1,1,0,-1]
    dc = [0,1,1,1,0,-1,-1,-1]
    for i in range(n):
        for j in range(n):
            if board[i][j] == 1:
                cnt += 1
                for k in range(8):
                    r = i + dr[k]
                    c = j + dc[k]
                    if r >= 0 and r <n and c >= 0 and c < n and board[r][c] == 0:
                        cnt +=1
                        board[r][c] = 2
    return answer-cnt
    