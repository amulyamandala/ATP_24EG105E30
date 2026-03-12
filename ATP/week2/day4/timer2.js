/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends */
        console.log("OTP Sent Successfully")
        let s=10;
        let intervalID=setInterval(()=>{
            s--
            console.log(`otp can resend after ${s}`);
            if(s===0){
            console.log("request a otp resend")
        clearInterval(intervalID)}
        },1000)
       


        