a = [1, -2, 3, -4, 5, -6]
print(['NO', 'YES'][any([[0, 1][x < 0] == [0, 1][y < 0] for x, y in zip(a, a[1:])])])
