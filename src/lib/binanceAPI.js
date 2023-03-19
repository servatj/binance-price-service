const axios = require("axios");

const baseUrl = "https://api.binance.com/api/v3/ticker/price";

async function getTokenPrice(symbol) {
	try {
		const response = await axios.get(`${baseUrl}?symbol=${symbol}`);
		return {
			symbol: response.data.symbol,
			price: response.data.price,
		};
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function getLastTick(symbol) {
	const interval = "1d";
	const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}`;
	const response = await axios.get(url);
	return response.data;
}

module.exports = {
	getTokenPrice,
	getLastTick,
};
