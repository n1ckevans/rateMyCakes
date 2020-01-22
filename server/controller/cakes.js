const mongoose = require('mongoose');

const Cake = new mongoose.model('Cake');
const Rating = new mongoose.model('Rating');

module.exports = {
  index(_, res) {
    Cake.find()
      .then(allCakes => res.json({
        cakes: allCakes,
        msg: "I love you like a fat kid loves cake"
      }))
      .catch(err => res.json({ error: err }));
  },

  rate(req, res) {
    Rating.create(req.params.id, req.body)
      .then(rating => res.json({ rating: rating}))
      .catch(err => res.json({ error: err}));
  },

  create(req, res) {
    Cake.create(req.body)
      .then(newCake => res.json({ cake: newCake }))
      .catch(err => res.json({ error: err }));
  },

  update(req, res) {
    console.log(req.body);
      Cake.findByIdAndUpdate(req.params.id, {$push: {rating: req.body}}, {
      runValidators: true,
      // will return the new updated obj rather than
      // the object before the update
      new: true
    }
    )
      .then(updatedCake => res.json({ cake: updatedCake }))
      .catch(err => res.json({ error: err }));
  },

  getById(req, res) {
    Cake.findById(req.params.id)
      .then(cake => {
        res.json({ cake: cake });
      })
      .catch(err => {
        res.json({ error: err });
      });
  },

  delete(req, res) {
    Cake.findByIdAndDelete(req.params.id)
      .then(deletedCake => {
        res.json({ deleted: deletedCake });
      })
      .catch(err => {
        res.json({ error: err });
      });
  },

}