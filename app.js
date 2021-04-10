function formValidation() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    if (textAlphanumeric(username, "* Invalid username *")) {
    if (lengthDefine(password, 5, 12)) {
    return true;
    }
    }
    return false;
    }
    function textAlphanumeric(inputtext, alertMsg) {
    var pattern=/^(([cb|CB])+\.)+(([EN|en])+\.)+([U|p|P|u]4[A-Za-z]{3}[0-9]{5})+$/;
    if (inputtext.value.match(pattern)) {
    return true;
    } else {
    document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for address.
    inputtext.focus();
    return false;
    }
    }
    function lengthDefine(inputtext, min, max) {
    var uInput = inputtext.value;
    if (uInput.length >= min && uInput.length <= max) {
    return true;
    } else {
    document.getElementById('p2').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
    inputtext.focus();
    return false;
    }
    }