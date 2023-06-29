import sys
sys.setrecursionlimit(int(1e6))
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]
score = 0
def DFS(r, c, board, n, m):
    global score
    score += int(board[r][c])
    board[r][c] = 'X'
    for k in range(4):
        nr = r + dr[k]
        nc = c + dc[k]
        if 0 <= nr < n and 0 <= nc < m and board[nr][nc] != 'X':
            DFS(nr, nc, board, n, m)
def solution(maps):
    global score
    board = [list(row) for row in maps]
    answer = []
    n = len(board)
    m = len(board[0])
    for i in range(n):
        for j in range(m):
            if board[i][j] != 'X':
                score = 0
                DFS(i, j, board, n, m)
                answer.append(score)
    return [-1] if len(answer) == 0 else sorted(answer)