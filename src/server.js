import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './app/routes';

const PORT = process.env.PORT || 3000;
const server = express();
const renderBody = (body) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="/bundle.js"></script>
    </html>
  `;
};

server.use(express.static(path.resolve(__dirname)));
server.get('/', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    const body = renderToString(<RouterContext {...props} />);
    res.send(renderBody(body));
  });
});

server.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    const body = renderToString(<RouterContext {...props} />);
    res.send(renderBody(body));
  });
});
// server.get('*', (req, res) => {
//   res.render('index');
// });

server.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT);
});
