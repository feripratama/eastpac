/** Initialize ExpressJS **/
var express = require("express");
var Web3 = require("web3");
var    app     = express();
    ports   = 5000;

app.use(express.json()); 



var routes = require("./api/routes/route.js")
    routes(app);

if(app.listen(ports)){
    console.log('*****************************************************')
    console.log('* East PAC node server  running on PORT : ' + ports );
    console.log('*****************************************************')
}else{
    console.log('Error bro')
}


