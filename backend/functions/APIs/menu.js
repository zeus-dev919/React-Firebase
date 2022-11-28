const {db} = require('../util/admin');

exports.getMenuByID = (request, response) => {
  const {categoryId} = request.params;
  let result = [];
  db
  .doc(`Restaurant/${process.env.RESTURANT_NAME}`)
   .get()
   .then((doc) => {
    doc.data().menu_map.map((item) => {
      if(item.type === categoryId)
        result.push(item);
      if(categoryId  == 'all')
        result.push(item);
     })
     return response.json(result);
   })
   .catch((err) => {
     console.error(err);
     return response.status(500).json({error:err.code});
   });
 };
 