const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(3000, () => console.log("listening on port 3000"));