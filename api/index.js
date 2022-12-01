const express = require('express');
const app = express();
const port = 8000;

const corsOptions = {
  origin: (o, callback) => callback(null, true),
};

const cors = require('cors');
app.use(cors(corsOptions));
app.get('/', (req, res) => {
  res.send([
    {
      name: 'Vincent',
      age: 22,
    },
    {
      name: 'Romain',
      age: 24,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
