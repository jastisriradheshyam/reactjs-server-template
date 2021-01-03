function setCookieInAPP(tokenObject) {

    let tokenString = JSON.stringify(tokenObject)
    // Encode the String
    let encodedTokenString = btoa(tokenString);
    setCookie('APP_cookie', encodedTokenString, 1)
}

function getUserDataFromCookie() {

    let encodedTokenString = getCookie('APP_cookie')
    // Decode the String
    var decodedTokenString = atob(encodedTokenString);
    let tokenObject = JSON.parse(decodedTokenString ? decodedTokenString : '{}')
    return tokenObject
}

function getTokenOnly() {
    let encodedTokenString = getCookie('APP_cookie')
    // Decode the String
    var decodedTokenString = atob(encodedTokenString);
    let tokenObject = JSON.parse(decodedTokenString ? decodedTokenString : '{}')
    return tokenObject.token ? tokenObject.token : null
}

function removeCookie() {
    let domainUrl = window.location.hostname
    document.cookie = "APP_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC;Domain=" + domainUrl + ";";
}

function setCookie(cname, cvalue, exdays) {
    let domainUrl = window.location.hostname
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;Domain=" + domainUrl + ";";
    //console.log("cookie string ---->", cname + "=" + cvalue + ";" + expires + ";path=/;Domain=" + domainUrl + ";")
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) / 1 === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


module.exports = {
    setCookieInAPP,
    getUserDataFromCookie,
    removeCookie,
    getTokenOnly,
}
