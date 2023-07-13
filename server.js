const express = require('express');
const app = express();

app.get('/get-configurations', function (req, res) {
  const prefix = process.env.PREFIX;
  if (!prefix) {
    return res.json({});
  }

  const configurations = {};
  for (const key in process.env) {
    if (key.startsWith(prefix)) {
      const strippedKey = key.substring(prefix.length);
      configurations[strippedKey] = process.env[key];
    }
  }

  res.json(configurations);
});

app.listen(3000, function () {
  console.log('App listening on port 3000');
});