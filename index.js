const express = require('express');

const db = require("./database.js")

const app = express();

app.use(express.static('public'))

app.get('/restuarants', function (req, res) {
   let sql = "select * from resturants"
   let params = []
   db.all(sql, params, (err, rows) => {
      if (err) {
         res.status(400).json({ "error": err.message });
         return;
      }
      res.json({
         "code": 200,
         "data": rows
      })
   });
});

app.get('/restuarants/:id', function (req, res) {
   let sql = "select * from resturants where id = ?"
   let params = [req.params.id]
   db.get(sql, params, (err, row) => {
      if (err) {
         res.status(400).json({ "error": err.message });
         return;
      }
      res.json({
         "code": 200,
         "data": row
      })
   });
})

app.get('/dishes/:id', function (req, res) {
   let sql = "select * from dishes where resturant_id = ?"
   let params = [req.params.id]
   db.all(sql, params, (err, rows) => {
      if (err) {
         res.status(400).json({ "error": err.message });
         return;
      }
      res.json({
         "code": 200,
         "data": rows
      })
   });
})

let server = app.listen(8081, function () {
   let host = server.address().address
   let port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})