//npm package 
var request = require('request');
var userDetails;

//initialize function is returning a promise instead of setting data or returning data
function initialize() {
    //options object is used for Setting url and headers for request
    var options = {
        url: 'https://api.github.com/users/VukDukic',
        headers: {
            'User-Agent': 'request'
        }
    }
};

//Return new promise
return new Promise((resolve, reject) => {
    //Do async job, request.get makes a GET request to the Github API. 
    //body - consists of the JSON response from the server
    //we are calling resolve method to pass data back to the handler which implements then on the promise
    request.get(options, (err, resp, body) => {
        if (err) {
            reject(err);
        } else {
            resolve(JSON.parse(body));
        }
    });
});
/** 
function main() {
    var initializePromise = initialize();
}

initialize().then((data) => {
    console.log(data);
});
*/

function main() {
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        userDetails = result;
        console.log('Initialized user details');
        //Use user details from here
        console.log(userDetails);
    }, (err) => {
        console.log(err);
    }).then((result) => {
        //Print the code activity 
        console.log(result.public_gists + result.public_repos);
    })
}

function main() {
    var userProfileURL = 'https://api.github.com/users/VukDukic';
    var dataPromise = getData(userProfileURL);
    //get user details after that get followers from URL
    dataPromise.then(JSON.parse)
}