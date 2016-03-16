var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');

app.set('view engine', 'jade');

app.use(cors());
app.use('/static', express.static('public'));

app.get('/redirect', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/redirect.html'));
});

app.get('/from', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/from.html'));
});

app.get("/kickmeto", function(req,res){
  // res.set('referrer','buzz.st');
  // res.render('redirect');
  res.sendFile(path.join(__dirname + '/views/redirect.html'));
});
app.listen(process.env.PORT || 8080);