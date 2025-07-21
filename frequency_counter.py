def frequency_counter(data_list):
    frequency_dict = {}
    for x in data_list:
        if x in frequency_dict:
            frequency_dict[x] += 1
        else:
            frequency_dict[x] = 1
    return frequency_dict