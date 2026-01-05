

nums=[2,4,6,8]

total=sum(nums)

if total%2!=0:

    print(False)

else:

    target=total/2

    possible_set={0}

    for num in nums:

        new_possible_set=set()

        for n in possible_set:

            new_possible_set.add(num+n)
        possible_set=possible_set.union(new_possible_set)

    print(possible_set)