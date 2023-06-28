def solution(board, moves):
    answer = 0
    stack = []
    for pos in moves:
        for i in range(len(board)):
            if board[i][pos-1] != 0:
                tmp = board[i][pos-1]
                board[i][pos-1] = 0
                if stack and stack[-1] == tmp:
                    stack.pop()
                    answer += 2
                else:
                    stack.append(tmp)
                break
    return answer