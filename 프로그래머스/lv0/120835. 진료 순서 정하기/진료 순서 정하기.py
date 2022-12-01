

def solution(emergency):
    응급순서 = sorted(emergency, reverse=True)
    return [응급순서.index(i) + 1 for i in emergency]