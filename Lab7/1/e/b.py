import random
for i in range(1):
    A=random.randint(1,1000000001)
for n in range(1,1000000001):
    k=n**n
    if k%A==0:
        print(k)
        break