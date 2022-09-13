const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Notes App</title>
      <link rel="stylesheet" href="./css/main.css">
  </head>
  <body>
      <div class="notes" id="app">
          <div class="notes__sidebar">
              <button class="notes__add" type="button">Add Note</button>
              <div class="notes__list">
                  <div class="notes__list-item notes__list-item--selected">
                      <div class="notes__small-title">Lecture Notes</div>
                      <div class="notes__small-body">I learnt nothing today.</div>
                      <div class="notes__small-updated">Thursday 3:30pm</div>
                  </div>
              </div>
          </div>
          <div class="notes__preview">
              <input class="notes__title" type="text" placeholder="Enter a title...">
              <textarea class="notes__body">I am the notes body...</textarea>
          </div>
      </div>
      <script src="./js/main.js" type="module"></script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});