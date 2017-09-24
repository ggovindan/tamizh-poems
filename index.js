const express = require('express');
const apiRoutes = require('./middleware');
const bodyParser = require('body-parser');

const app = express();

app.engine('html', require('ejs').renderFile);

app.set('views', `${__dirname}/views`);
app.set('view engine', 'html');
app.use(express.static(`${__dirname}/`));
app.use(bodyParser.json());

app.get('/', apiRoutes.index);
app.get('/defaultPage', apiRoutes.defaultPage);

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on http://localhost:3000');
})