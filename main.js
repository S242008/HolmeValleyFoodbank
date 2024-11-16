function confirmationMessage(){
    document.getElementById("confirmation").innerHTML = "Your input has been confirmed";
}

function storeDetails(){
    firstName = document.forms["details"]["first_name"].value;
    lastName = document.forms["details"]["surname"].value;
    document.getElementById("user_details").innerHTML = "Your first name has been recorded as  " + firstName + " and your last name has been recorded as " + lastName;
}