const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { solveSudoku } = require('./solveSudoku');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/solve', (req, res) => {
  const { grid } = req.body;
  const solvedGrid = solveSudoku(grid);
  if (solvedGrid) {
    res.json({ solvedGrid });
  } else {
    res.status(400).json({ error: 'No solution exists' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
