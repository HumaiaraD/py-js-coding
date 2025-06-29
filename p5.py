lst = list(map(int, input().split(",")))
# Write your code below
list2 = []
for index, item in enumerate(lst):
    if item < 50 or item % 5 == 0:
        list2.append(index)

print(list2)