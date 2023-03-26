import re

for _ in range(int(input())):
    user, email = input().split()
    if re.match(r'^[a-zA-Z]+[\w\-.]*@[a-zA-Z]+\.[a-zA-Z]{1,3}$', email[1:-1]):
        print(f'{user} {email}')