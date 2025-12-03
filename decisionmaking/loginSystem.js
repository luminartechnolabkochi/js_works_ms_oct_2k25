
/*
✅ 3. Login System with Password and OTP

Task:
Ask for password.

If password is correct:

    chk OTP is correct → "Login successful"

    Else → "Incorrect OTP"


Else → "Incorrect password"

*/

var dbPassword="Password@123"

var dbOtp=4556

var userPassword="assword@123"

var userOtp=4548

if(dbPassword==userPassword){

    if(dbOtp==userOtp){
        console.log("success");
        
    }
    else{

        console.log("incorrect otp");
        
    }
}
else{
    console.log("inavlid password");
    
}