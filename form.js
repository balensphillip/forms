const firstFocus=()=>{
    let uid = document.register.userid.focus();
    return true;
}

const userIdValidate=(min,max)=>{
    let uid = document.register.userid;
    var uidLen = uid.value.length;
    if (uidLen == 0 || uidLen >= max || uidLen < min){
        alert('userid should not be empty/ length should be between'+ min + 'to' + max)
        uid.focus()
        return false;
    }
    document.register.passid.focus()
    return true;
}

const passidValidate =(min,max)=>{
    let passid = document.register.passid;
    var passLen = passid.value.length;
    if (passLen == 0 || passLen >= max || passLen < min){
        alert('passid should not be empty/ length should be between'+ min + 'to' + max)
        passid.focus()
        return false;
    }
    document.register.username.focus()
    return true;
}

const addressFunction = () => {
    let address = document.register.address
    // below is what we call regular expressions
    // regular expressions help us manipulate strings
    let comp = /^ [0-9a-zA-Z] + $/
    if(address.value.match(comp)){
        // we are focusing on the next field country
        document.register.country.focus()
    return true
    }
    else{
        alert('Please use alphanumeric characters')
        address.focus()
        return false
    }
}

const country=()=>{
    let country = document.register.country
    if(country.value == 'Default'){
        alert('Please select one of the countries below')
        country.focus()
        return false
    }
    else{
        document.register.postal
        postal.focus()
        return true
    }
}
