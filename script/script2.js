function validation(){
var fname = document.getElementById("fname").value;
var regEx1 = /^[A-Za-z]+$/;
var lname = document.getElementById("lname").value;
var address = document.getElementById("address").value;
var regEx2 = /^[a-zA-Z0-9 ]*$/;
var city = document.getElementById("city").value;
var state = document.getElementById("state");
var zipcode = document.getElementById("zipcode").value;
var phone = document.getElementById("phone").value;
var regEx3 = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
var email1 = document.getElementById("email");
var email2 = document.getElementById("email2");
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var radio1 = document.getElementById("vegan").checked;
var radio2 = document.getElementById("vegetarian").checked;
var radio3 = document.getElementById("nonvegt").checked;   
var checkbox1 = document.getElementById("phoneno").checked;
var checkbox2 = document.getElementById("emailaddr").checked;
var checkbox3 = document.getElementById("mail").checked;  
var checkbox4 = document.getElementById("linkedin").checked;
var selectedDate = document.getElementById("datepicker").value;
   var now = new Date();
    
    if(fname.length <2){
        alert ("Please Enter First Name"); // will except a name with at least two characters
        return false;
    }
     if (selectedDate < now) {
    alert("Date must be in the future");
    return false;
   }
    if (!regEx1.test(fname)) {
    alert("Please Enter First Name with Letters Only"); // will except a name with alpha only characters
    return false;
 }
   if(lname.length <2){
        alert ("Please Enter Last Name"); // will except a name with at least two characters
        return false;
    }
    if (!regEx1.test(lname)) {
    alert("Please Enter Last Name with Letters Only"); // will except a name with alpha only characters
    return false;
 }
    if(address.length <5){
        alert ("Please Enter Address"); // will except address with at least five characters
        return false;
    }
    if (!regEx2.test(address)) {
    alert("Please Enter a Valid Address with Alpha Numeric Characters Only");
    return false; // will except a name with alphanumeric only characters
 }
    if(city.length <3){
        alert ("Please Enter City"); // will except a city name with at least three characters
        return false;
    }
    if (!regEx1.test(city)) {
    alert('Please Enter City with Letters only'); // will except a city name with alpha only characters
    return false;
 }
    if(state.value == ""){
        alert ("Please Select State"); // checks if the state field is empty
        return false;
    }
  
   if(isNaN(zipcode)|| zipcode.length !=5){
        alert ("Please Enter Valid Zipcode"); // will except a zipcode with five numeric characters
        return false;
    }
    if (!regEx3.test(phone)) {
    alert("Please Enter Phone Number with Requested Phone Format");
    return false; //checks if correct phone number format is entered
 }
    if (!filter.test(email1.value)) {
    alert("Please Provide a Valid Email Address"); // checks if valid email is entered
    email.focus;
    return false;
 }
    if (!filter.test(email2.value)) {
    alert("Please Re-enter a Valid Email Address"); // checks if valid confirm email is entered
    email.focus;
    return false;
 }
    if(email1.value !=email2.value){
    alert("Email Confirmation doesn't match Email"); // checks if email and confirm email match
    return false;
}
    if((radio1=="")&&(radio2=="")&&(radio3=="")){
    alert("Please Select Meal Preference");
    return false; // checks if meal preference buton is selcted 
    }
    
    if((checkbox1=="")&&(checkbox2=="")&&(checkbox3=="")&&(checkbox4=="")){
    alert("Please Select Contact method"); // checks if contact method checkboxes are selected
    return false;
    }

    alert ("Needed entries have been verified by Wossenu Graphics LLC."
                + "Your form is now being passed to your browser's "
                + "Mail Delivery Sub-System."); 
   return true;
           
}

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

 function fun(){  
   document.getElementById("myform").reset();  
 }  
