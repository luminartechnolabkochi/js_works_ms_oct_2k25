

limit = 10

prev = 0

cur = 1

print(prev)
print(cur)

for i in range(1,limit-2):

    next=prev+cur
    print(next)

    prev=cur

    cur=next