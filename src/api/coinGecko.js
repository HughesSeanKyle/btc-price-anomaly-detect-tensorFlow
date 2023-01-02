import axios from 'axios';

// Helper
const formatPrice = (arr) => {
	const xAxisArr = [];
	const yAxisArr = [];

	arr.map((coorditates, index) => {
		const date = new Date(coorditates[0]);
		const formattedDate = date.toLocaleString();

		xAxisArr.push(formattedDate);
		yAxisArr.push(coorditates[1]);
	});

	return {
		xAxisFormattedArr: xAxisArr,
		yAxisFormattedArr: yAxisArr,
	};
};

// at some point add id, vs currency and days as args
export async function getBTCHistoricalData() {
	try {
		const response = await axios.get(
			`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30`,
			{}
		);
		console.log('response.data', response.data);

		const { prices, total_volumes, market_caps } = response.data;

		const formattedHistoricPrices = formatPrice(prices);
		const formattedHistoricTotalVolumes = formatPrice(total_volumes);
		const formattedHistoricMarketCaps = formatPrice(market_caps);

		const formattedData = {
			formattedHistoricPrices,
			formattedHistoricTotalVolumes,
			formattedHistoricMarketCaps,
		};

		return formattedData;
	} catch (error) {
		console.error(error);
	}
}

export async function getBTCTradeVolBinance() {
	try {
		const response = await axios.get(
			`https://api.coingecko.com/api/v3/exchanges/binance`,
			{}
		);
		const data = response.data;
		console.log('data', data);

		// const formattedHistoricPrices = formatPrice(data);
		// return formattedHistoricPrices;
	} catch (error) {
		console.error(error);
	}
}
