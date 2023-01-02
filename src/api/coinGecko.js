import axios from 'axios';

// Helper
const formatPrice = (arr) => {
	// const sampleArr = [
	//     [1672599938852, 16593.961279812982],
	//     [1672600204747, 16594.62116601541],
	//     [1672600532129, 16610.318169673446],
	//     [1672600903802, 16621.129627710525],
	// ];

	const xAxisArr = [];
	const yAxisArr = [];

	arr.map((coorditates, index) => {
		const date = new Date(coorditates[0]);
		const formattedDate = date.toLocaleDateString();

		xAxisArr.push(formattedDate);
		yAxisArr.push(coorditates[1]);
	});

	console.log('xAxisArr', xAxisArr);
	console.log('yAxisArr', yAxisArr);

	return {
		xAxisFormattedArr: xAxisArr,
		YAxisFormattedArr: yAxisArr,
	};
};
// at some point add id, vs currency and days as args
export async function getBTCHistoricalPrice() {
	try {
		const response = await axios.get(
			`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30`,
			{}
		);
		const data = response.data.prices;
		console.log('data', data);

		const formattedHistoricPrices = formatPrice(data);
		return formattedHistoricPrices;
	} catch (error) {
		console.error(error);
	}
}
