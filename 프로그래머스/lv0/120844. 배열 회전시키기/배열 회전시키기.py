from collections import deque

def solution(numbers, direction):
    numbers = deque(numbers)
    if direction == "right": direction = 1
    if direction == "left": direction = -1
    numbers.rotate(direction)
    return list(numbers)