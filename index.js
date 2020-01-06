const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public')); // so the public folder is used (e.g., so can serve app.css)
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
