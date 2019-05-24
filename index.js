var express = require('express');
var app = express();
var publicDir = (__dirname+'/public/');
app.use(express.static(publicDir));

var listBanner = [
  {id: 1, link: 'http://192.168.0.10:3000/1.jpg'},
  {id: 2, link: 'http://192.168.0.10:3000/2.jpg'},
  {id: 3, link: 'http://192.168.0.10:3000/3.jpg'},
];

app.get('/banner', (req, res, next) => {
  res.end(JSON.stringify(listBanner));
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Backend running on port 3000");
});
