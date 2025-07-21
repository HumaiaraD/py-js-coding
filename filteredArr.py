def filter(lst, fn):
    filtered_lst = []
    for i in range (len(lst)):
        if fn(lst[i], i):
            filtered_lst.append(lst[i])
    return filtered_lst