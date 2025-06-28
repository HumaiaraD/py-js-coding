def prod(lst):
    num = 1
    for i in range(len(lst)):
        num *= lst[i]
    return num