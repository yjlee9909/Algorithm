info = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0,
}
rate = 0
total = 0
for i in range(20):
    sub, score, grade = input().split()
    if grade != "P":
        rate += float(score) * info[grade]
        total += float(score)
print(rate/total)