import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './app/routes';

const PORT = process.env.PORT || 3000;
const REACT_APP_ENV = process.env.REACT_APP_ENV || 'development'
const server = express();
const renderBody = body => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Hello</title>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=">
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="/bundle.js"></script>
    </html>
  `;
};

const relatedPath = REACT_APP_ENV === 'development' ? `..${path.sep}dist` : '';
server.use(express.static(path.resolve(__dirname, relatedPath)));
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
