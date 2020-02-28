const axios = require('axios');

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


// Promise based
function promiseUserName() {
    return axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data);
}


module.exports = { fetchUserName, promiseUserName };