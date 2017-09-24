const showdown = require('showdown');
const fs = require('fs');
const path = require('path');


converter = new showdown.Converter();

exports.index = (req, res) => {
  res.render('index');
}

exports.defaultPage = (req, res) => {
  console.log('inside default /');
  var response = {};

  fs.readdir('./', (err, files) => {
    var mdFiles = [];
    files.forEach( file => {
      if (path.extname(file) === '.md') {
        mdFiles.push(file);
      }
    });
    response['files'] = mdFiles;
    fs.readFile(mdFiles[0], 'utf8', function(err, contents) {
      if (!err) {
        html = converter.makeHtml(contents);
        response['html'] = html;
        res.json(response);
      } else {
        res.json(err);
      }
    });
  });

}

