n = int(input())
rows = int(n/2)+1
for i in range(rows):
    star = (2 * i) + 1
    stars = star * "*"
    print(stars)
    