const express = require("express");
const fishRouter = require("./routes/fishes")
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true })),
app.use("/fishes",fishRouter)

app.get("/", (req, res) => {
	return res.json({
		message: "fishe end point is working"
	});
});
const port = 9000;
app.listen(port, () => {
	console.log('listen to server', port)
});

