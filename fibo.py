def fibo(i):
    if i == 0: return 0
    if i == 1: return 1
    a, b = 0, 1
    for n in range (2, i + 1):
        a, b = b, a + b
    return b