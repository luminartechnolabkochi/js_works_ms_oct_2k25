

challenge_code="7z9"

text="ABC123"

result=text+challenge_code

output=""

count = 0
for i in range(0,len(result)):
    count+=1
    if count==3:
        output+="X"
        count=0
    else:
        output+=result[i]
print(output)
    