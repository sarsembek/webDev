n = int(input())

arr = [int(input()) for i in range(n)]

for i in range(n):
    if i % 2 == 0:
        print(arr[i])