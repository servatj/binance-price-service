const express = require('express')
require('dotenv').config();
const { getTokenPrice } = require("./lib/binanceAPI");

async function getPrice(pair = "BTCUSDT") {
	try {
		return await getTokenPrice(pair);
	} catch (error) {
		console.error(error);
	}
}

const app = express();
const PORT = 3000;

const secret = process.env.SECRET;

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader

    if (token == null) return res.sendStatus(401);

    if (token !== secret) return res.sendStatus(403);

    next();
};

app.get("/price", async (req, res) => {
    const { pair } = req.query;
    const price = await getPrice(pair);
    res.status(200).json(price);
});


app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Server is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
