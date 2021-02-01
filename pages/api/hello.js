// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require("fs")

export default (req, res) => {
  if(req.method == 'GET'){
    fs.readFile('../../ngrok_url.txt', function (err, data) {
      if (err) {
        return console.error(err);
      }
      res.end(data.toString());
    });
  } else {
    fs.writeFile('../../ngrok_url.txt', req.body, function(err) {
      if (err) {
          return console.error(err);
      }
    });
  }
}
