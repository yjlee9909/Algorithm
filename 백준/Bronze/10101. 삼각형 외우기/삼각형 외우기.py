x = int(input())
y= int(input())
z= int(input())
if x+y+z == 180:
    if x == y == z == 60:
        print("Equilateral")
    elif x == y or y == z or x == z:
        print("Isosceles")
    elif x != y and y != z:
        print("Scalene")
else:
    print("Error")