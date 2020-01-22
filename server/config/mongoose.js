const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rate_my_cakes', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

require('../models/cake');