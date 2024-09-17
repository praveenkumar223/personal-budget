const express = require('express');
const app = express()
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    mybudget: [
      {
        title: 'Eat out',
        budget: 30
      },
      {
        title: 'Rent',
        budget: 400
      },
      {
        title: 'Groceries',
        budget: 90
      },
    ]
  };
  
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
    //res.send('Hello World!');
  });

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});