function validUrl (url) {
    var regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    if (regex.test(url)) {
        return true;
    } else {
        return false;
    }
}

export { validUrl }