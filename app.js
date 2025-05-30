const express = require('express');
const path = require('path');

const app = express();
const port = 80;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Pug Garden Minesweeper' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app; // Exporte l'application pour les tests
