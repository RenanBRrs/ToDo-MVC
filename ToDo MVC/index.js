const express = require('express');
const exphbs = require('express-handlebars');
require('dotenv/config');
const port = 3000;

const app = express();
const conn = require('./db/conn');

const Task = require('./models/Task');

const tasksRoutes = require('./routes/tasksRoutes');

app.engine('handlebars', exphbs.engine());

app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(express.static('public'));

app.use('/tasks', tasksRoutes);

conn
  .sync()
  // .sync({ force: true })
  .then(() => {
    app.listen(port, (req, res) => {
      console.log(`listening on http://localhost:${port}/tasks`);
    });
  })
  .catch((err) => {
    console.log('Erro' + err);
  });
