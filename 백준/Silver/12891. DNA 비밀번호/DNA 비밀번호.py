import sys
input = sys.stdin.readline

S, P = map(int, input().split(' '))
DNA = list(input())
checkList = list(map(int,input().split(' '))) # 1 0 0 1
Result = 0
myList = [0] * 4 # A,C,G,T
checkSecret = 0

def myAdd(c):
    global myList, checkSecret
    if c=='A':
        myList[0] += 1
        if myList[0] == checkList[0]:
            checkSecret += 1
    elif c == 'C':
        myList[1] += 1
        if myList[1] == checkList[1]:
            checkSecret += 1
    elif c == 'G':
        myList[2] += 1
        if myList[2] == checkList[2]:
            checkSecret += 1
    elif c == 'T':
        myList[3] += 1
        if myList[3] == checkList[3]:
            checkSecret += 1

def myRemove(c):
    global myList, checkSecret
    if c=='A':
        if myList[0] == checkList[0]:
            checkSecret -= 1
        myList[0] -= 1
    elif c == 'C':
        if myList[1] == checkList[1]:
            checkSecret -= 1
        myList[1] -= 1
    elif c == 'G':
        if myList[2] == checkList[2]:
            checkSecret -= 1
        myList[2] -= 1
    elif c == 'T':
        if myList[3] == checkList[3]:
            checkSecret -= 1
        myList[3] -= 1

for i in range(4):
    if checkList[i] == 0:
        checkSecret+= 1
for i in range(P):
    myAdd(DNA[i]) # G, A
    # print(DNA[i])
if checkSecret == 4:
    Result += 1
for i in range(P, S):
    j = i - P
    myAdd(DNA[i])
    myRemove(DNA[j])
    if checkSecret == 4:
        Result += 1

print(Result)