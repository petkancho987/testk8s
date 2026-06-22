const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    app: '60-new',
    status: '60-new',
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
