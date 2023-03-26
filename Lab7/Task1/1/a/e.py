import math
v = int(input())
t = int(input())
if(v * t > 109):
    print(v * t - 109)
elif(v * t < 109 and v * t > 0):
    print(v * t)
else:
    print(int(math.fabs(109 - math.fabs(v * t))))