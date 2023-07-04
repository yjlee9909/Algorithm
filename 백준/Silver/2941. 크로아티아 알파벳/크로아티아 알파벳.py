arr = ["c=","c-","dz=","d-","lj","nj","s=","z="]
x = input()
for i in arr:
    x = x.replace(i,'*')
print(len(x))