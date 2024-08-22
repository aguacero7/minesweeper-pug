const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Pug Garden Minesweeper' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});