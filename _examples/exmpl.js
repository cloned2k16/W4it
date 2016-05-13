var w4it    =   require("w4it")
,   request =   require("request")
,   _       = {}
;

console.log('ver:',w4it.version);

w4it.enableAnimation(true);

_.inProgress = true;

request.get('http://ipinfo.io/json/', function (err, response, body) {
    _.inProgress = false;
    
    if (!err && response.statusCode == 200) {
        console.log(body);
    }
    else console.err(err);

});
            

w4it.done ( function done   () { return !_.inProgress }
    ,       function then   () {
        console.log('Done.');
    }           
);


