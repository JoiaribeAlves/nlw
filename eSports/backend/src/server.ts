import express from "express";
import cors from "cors";

import { router } from "./routes";

const port = 4000;
const app = express();

// Middlewares
app.use(express.json());
app.use(
	cors({
		origin: "http://127.0.0.1:5173",
	})
);
app.use(router);

app.listen(port, () => console.log("Server is runnig."));
