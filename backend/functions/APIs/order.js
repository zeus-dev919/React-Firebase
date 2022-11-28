const { db } = require('../util/admin')

exports.getOrder = (req , res) => {
    db 
     .doc(`webOrder/${process.env.ORDER_NAME}`)
     .get()
     .then((doc) => {
         return res.json(doc.data());
     })
     .catch((err) => {
        console.log(err)
        return res.status(500).json({err: err.code})
     })
}