const {db} = require('../util/admin');

exports.getAllSliders = (request, response) => {
 db
  .doc(`Restaurant/${process.env.RESTURANT_NAME}`)
  .get()
  .then((doc) => {
    return response.json(doc.data().top_ad_slider);
  })
  .catch((err) => {
    console.error(err);
    return response.status(500).json({error:err.code});
  });
};
