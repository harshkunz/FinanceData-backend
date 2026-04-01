import express from "express";
import ENV  from './config/env';

const app = express();

app.get("/", (req, res) => {
    res.json({ status: "ok" })
})

const PORT = ENV.PORT;

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
    console.log(`check http://localhost:${PORT}`);
})