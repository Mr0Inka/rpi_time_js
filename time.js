  const image = await jimp.read('test/image.png');
        image.blur(5);

let request = require("request");
let timeJob = require('child_process').exec;

apiTime();

function apiTime(){
    request("http://worldtimeapi.org/api/ip", function(error, response, body){
        if(error == null){
	    let timer = JSON.parse(body);
            console.log(" > Time set successfully");
            timeJob('sudo date -s "' + timer.datetime + '"; echo "hello"');
	} else {
	    console.log(" > Error loading time: " + error);
	    setTimeout(function(){
		apiTime();
	    }, 3000);
	}
    });
}
