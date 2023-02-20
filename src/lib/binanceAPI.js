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

module.exports = {
	getTokenPrice,
};
