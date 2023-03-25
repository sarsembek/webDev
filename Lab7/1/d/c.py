n = int(input())

arr = [int(input()) for i in range(n)]

ans = 0

for i in range(n):
    if arr[i] >= 0:
        ans += 1
print(ans)
