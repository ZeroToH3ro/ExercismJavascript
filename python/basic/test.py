D = dict()
for x in enumerate(range(2)):
    D[x[0]] = x[1]
    D[x[1] + 7] = x[0]

print(D)