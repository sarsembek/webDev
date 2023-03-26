import re

regex_pattern = r"^(9|8|7)(\d{9})$"    # Do not delete 'r'.

a = int(input())
b = []
for _ in range(a):
    m = re.match(regex_pattern, input())
    if m: 
        print("YES") 
    else: 
        print("NO")