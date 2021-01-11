const client = require('../db')
const express = require('express');
const router = express.Router();


router.get("/", async (req, res, next) => {
	try {
		const result = await client.query('SELECT * FROME fishes');
		return res.status(200).json(result.rows);
	}
	catch (err) {
	return next(err)}
});

 router.get("/:id", async (req, res, next) => {
	try {
 		const {id} = req.params
 		const result = await db.query("SELECT name, type *FROM fishes WHERE id =  $1", [id]);
		return res.status(200).json({
			Results: result.rows
		});
	}
	catch (err) {
	  return next(err)}
 });
 
 router.post("/", async (req, res, next) => {
	try {
		const {name, type} = req.body
	const result = await db.query( 
	"INSERT INTO fishes VALUE($1,$2) RETURNING*",[name, type])
		return res.status(200).json(result.rows);
	}
	catch (err) {
	return next(err)	  }
  });

 
  router.patch("/:id", async (req, res, next) => {
	 try {
		 const { id } = req.params;
	 const { name,type } = req.body;
		 const result = await db.query("UPDATE fishes SET name= $1,type=$2 WHERE id = $3  RETURNING *",
		[name, type, id]);
		return res.json(result.rows[0]);
 }
 catch (err) {
 return next(err)
	  }
  });
router.delete("/:id", async (req, res, next) => {
	 try {
		const {id} = req.params
	const result = await db.query( "DELETE FROM fishes WHERE id = $1",[id])
	return res.json({
	message: "record deleted"
	});
   } catch(err) {
     return next(err)
	}
});

		
module.exports = router

	



