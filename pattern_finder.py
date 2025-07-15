def find_occurrences(text, pattern):
    count = 0
    positions = []
    
    # Get the length of both strings
    text_length = len(text)
    pattern_length = len(pattern)
    
    # Check each possible starting position in text
    for i in range(text_length - pattern_length + 1):
        # Check if pattern matches at current position
        if text[i:i+pattern_length] == pattern:
            count += 1
            positions.append(i)
    
    # Return tuple with results
    if count > 0:
        return (True, count, positions)
    else:
        return (False, 0, [])

# Read input
text = input()
pattern = input()

# Call your function and print the result
result = find_occurrences(text, pattern)
print(result)