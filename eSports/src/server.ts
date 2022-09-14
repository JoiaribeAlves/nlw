import express from "express";

const port = 4000;
const app = express();

// Middlewares
app.use(express.json());

app.get("/ads", (req, res) => {
	return res.json({ message: "Hello" });
});

app.listen(port, () => console.log("Server is runnig."));
