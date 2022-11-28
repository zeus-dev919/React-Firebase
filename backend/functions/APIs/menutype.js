const { db } = require('../util/admin');

exports.getType = (request, response) => {
  db
    .doc(`Restaurant/${process.env.RESTURANT_NAME}`)
    .get()
    .then((doc) => {
      return response.json(doc.data().type_order);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};
