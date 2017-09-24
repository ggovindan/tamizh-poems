const showdown = require('showdown');
const fs = require('fs');


converter = new showdown.Converter();

exports.index = (req, res) => {
  res.render('index');
}

exports.defaultPage = (req, res) => {
  console.log('inside default /');
  fs.readFile('sundara-kaandam.md', 'utf8', function(err, contents) {
    if (!err) {
      html = converter.makeHtml(contents);
      res.json({"html": html});
    } else {
      res.json(err);
    }
  });
}
