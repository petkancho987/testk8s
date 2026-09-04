const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    app: '20260904',
    status: '20260904',
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
