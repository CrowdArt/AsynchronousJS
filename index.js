var userDetails;

function initialize() {
    //Setting url and headers for request
    var options = {
        url: 'https://api.github.com/users/VukDukic',
        headers: {
            'User-Agent': 'request'
        }
    }
};

//Return new promise
return new Promise((resolve, reject) => {
    //Do async job
    request.get(options, (err, resp, body) => {
        if (err) {
            reject(err);
        } else {
            resolve(JSON.parse(body));
        }
    });
});