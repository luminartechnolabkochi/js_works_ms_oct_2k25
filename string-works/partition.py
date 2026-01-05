

nums=[1,5,5,11]

total=sum(nums)

if total%2!=0:

    print("false")

else:

    target=total//2

    possible_set={0}

    for num in  nums:

        new_p_set=set()

        for n in possible_set:

            new_p_set.add(n+num)
        possible_set=possible_set.union(new_p_set)

