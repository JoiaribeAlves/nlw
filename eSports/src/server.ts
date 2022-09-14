import express from "express";

const port = 4000;
const app = express();

app.get("/", (req, res) => {
	return res.send("Hello");
});

app.listen(port, () => console.log("Server is runnig."));
