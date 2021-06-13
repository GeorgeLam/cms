import express from 'express';
var bodyParser = require('body-parser');

const posts = require('./api/routes/posts');
const comments = require('./api/routes/comments');
const users = require('./api/routes/users');

const app = express();
const port: number = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Get for /');
});

app.use('/v1/posts', posts);
app.use('/v1/comments', comments);
app.use('/v1/users', users);

app.listen(port, () =>
    { return console.log(`Server listening on ${port}`)}
);