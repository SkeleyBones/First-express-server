//require package and storing it in express variable
const express = require('express');
//calling express and storing its value in a variable
const app = express();
//routing any traffic going to the root url and sending it back A response.
app.get('/', function(request, response){
    response.send("Landing page!")
})
// rerouting any traffic that going to /Secret to display something else
app.get('/Secret', function(req, res){
    res.send('Oh nos, youve found my lair OWO')
})
// Here our application is listening for request on port 4000
app.listen(4000);
// A regular console log to let us know if are server is up or down.
console.log("Server is live and on port 3000......");