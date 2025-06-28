def reverse(lst):
    verse = []
    for i in range(len(lst -1), -1, -1):
        verse.append(lst[i])
    return verse

def turn(lst):
    return lst[::-1]

def turnaround(lst):
    return list(reversed(lst))