string = input()

string_reverse = []
j = 0

for i in range(len(string) - 1, -1, -1):
    string_reverse.append(string[i])
    j += 1

string_reverse = "".join(string_reverse) #transform list in string

print(string_reverse)
