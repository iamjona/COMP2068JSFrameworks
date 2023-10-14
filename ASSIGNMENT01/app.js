const express = require('express');
const hbs = require('hbs');
const app = express();

// Set the view engine
app.set('view engine', 'hbs');

// Serve static files from the 'public' folder
app.use(express.static(__dirname + '/public'));

// Define your routes (see the next step)
app.use(require('./routes/index'));

// Start your server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
