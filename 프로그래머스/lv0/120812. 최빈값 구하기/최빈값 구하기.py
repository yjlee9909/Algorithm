from collections import defaultdict, Counter
def solution(array):
    counter = Counter(array)
    max_count = max(counter.values()) #최댓값
    
    #여러개인지 그 키만 num으로
    mode_values = [num for num, count in counter.items() 
                  if count == max_count]
    #print(mode_values)
    if len(mode_values) > 1:
        return -1
    return mode_values[0]
    
    