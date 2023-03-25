x = int(input())
y = int(input())
z = int(input())
def Election(x,y,z):
    if x and y == 0:
        return False
    elif x and z == 0:
        return False
    elif y and z == 0:
        return False
    else:
        return True
Election(x, y, z)