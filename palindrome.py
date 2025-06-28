str = input()
backwards = str[::-1]

if str == backwards:
    print("It is not a palindrome")
else:
    print("It is a palindrome.")