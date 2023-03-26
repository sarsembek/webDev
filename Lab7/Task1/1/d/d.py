n = int(input())

arr = [int(input()) for i in range(n)]

ans = 0

for i in range(1,n):
    if arr[i] > arr[i - 1]:
        ans += 1
print(ans)