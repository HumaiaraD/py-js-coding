text = input()
lower = text.lower()
count = 0
for char in lower:
    if char == 'p':
        count += 1

print (count)