const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    app: 'waesrd',
    status: 'waesrd',
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
