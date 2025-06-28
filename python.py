lst = input().split(",")
new_list = []
for item in lst:
    if len(item) > 5:
        new_list.append(item)
print(new_list)