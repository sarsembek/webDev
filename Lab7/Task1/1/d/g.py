a = int(input())
arr = []
for i in range(a):
    arr.append(input())
arr.reverse()
print(*arr, sep=' ')
