def solution(n):
    answer = [[0]*n for _ in range(n)]
    r,c = 0,0
    dr = [-1,0,1,0]
    dc = [0,1,0,-1]
    d = 1 #바라보는 방향
    k = n * n
    cnt = 1
    while (cnt < k):
        nr = r + dr[d]
        nc = c + dc[d]
        # 갈 수 없으면 회전만
        if nr >= n or nr < 0 or nc >= n or nc < 0 or answer[nr][nc] != 0:
            d = (d + 1) % 4
            continue
        # 갈 수 있다면? 
        answer[r][c] = cnt;
        cnt += 1
        r = nr
        c = nc
    
    # 마지막
    answer[r][c] = cnt
    
    return answer