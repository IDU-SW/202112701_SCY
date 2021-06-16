const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const TodoRouter = require('./todo/TodoRouter');
const GroupRouter = require('./todoGroup/GroupRouter');
app.use(TodoRouter);
app.use(GroupRouter);

console.log('listen 3000');
app.listen(3000);