while True:
    x, y, z = map(int, input().split())
    if x == y == z == 0:
        break
    if sum((x, y, z)) - max((x, y, z)) <= max((x, y, z)):
        print("Invalid")
    elif x == y == z:
        print('Equilateral')
    elif x == y or y == z or x == z:
        print("Isosceles")
    else :
        print("Scalene")