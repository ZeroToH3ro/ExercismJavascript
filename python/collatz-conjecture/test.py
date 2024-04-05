def steps(number):
    count = 0

    while number != 1:
        if number % 2 == 0:
            count += 1
            number /= 2
        else:
            count += 1
            number = number * 3 + 1

    return count

print(steps(12));