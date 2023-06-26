def solution(park, routes):
    dr = [-1,0,1,0]
    dc = [0,1,0,-1]
    d = {'N':0,'E':1,'S':2,'W':3}
    n = len(park)
    m = len(park[0]) # 열 크기
    r, c = 0, 0
    
    for i in range(n):
        for j in range(m):
            if park[i][j] == 'S':
                r, c = i, j
    for tmp in routes:
        cmd, dis = tmp.split(' ')
        flag = True
        nr, nc = r, c
        for i in range(int(dis)):
            nr, nc = nr+dr[d[cmd]], nc+dc[d[cmd]]
            if nr < 0 or nr >= n or nc < 0 or nc >= m or park[nr][nc] =='X':
                flag = False
                break
        if flag:
            r, c = nr, nc
    return [r,c]