import re

def solution(my_string):
    return sum(map(int, re.findall(r'[0-9]', my_string)))