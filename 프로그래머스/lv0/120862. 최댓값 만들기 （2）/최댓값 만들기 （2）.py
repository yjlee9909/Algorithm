def solution(numbers):
    numbers.sort()
    if numbers[0] * numbers[1] > numbers[-1] * numbers[-2]:
        return numbers[0] * numbers[1]
    return numbers[-1] * numbers[-2]
