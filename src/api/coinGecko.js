import axios from 'axios';

// at some point add id, vs currency and days as args
export async function getBTCHistoricalPrice() {
	try {
		const response = await axios.get(
			`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1`,
			{}
		);
		const data = response.data.prices;
		console.log('data', data);
		return data;
	} catch (error) {
		console.error(error);
	}
}

getBTCHistoricalPrice();
