function fetchUserName(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            callback(this.response);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}

module.exports = fetchUserName;