const express = require('express');
// const apiRoutes = require('./middleware');
const bodyParser = require('body-parser');

const app = express();

app.engine('html', require('ejs').renderFile);

app.set('views', `${__dirname}/views`);
app.set('view engine', 'html');
app.use(express.static(`${__dirname}/`));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on http://localhost:3000');
})