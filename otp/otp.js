$(document).ready(function () {
   
})
function otp(){
    var digits="0123456789";
    var OTP="";
    for(var i=0;i<6;i++)
    {
      OTP+= digits[Math.floor(Math.random()*10)];
    }
    document.getElementById("random").innerHTML=OTP;
 }
           
 