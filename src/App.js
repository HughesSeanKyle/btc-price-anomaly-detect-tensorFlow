import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import LineChart from './components/Charts/LineChart';
import { getBTCHistoricalData, getBTCTradeVolBinance } from './api/coinGecko';

function App() {
	const [historicData, setHistoricData] = useState(null);

	useEffect(() => {
		(async () => {
			const historicData = await getBTCHistoricalData();
			console.log('historicData', historicData);
			setHistoricData(historicData);

			const tradeVolBinance = await getBTCTradeVolBinance();

			console.log('tradeVolBinance', tradeVolBinance);
		})();
	}, []);

	return (
		<div className="App p-5">
			<LineChart
				historicData={historicData?.formattedHistoricPrices}
				heading="Btc Price over 30 days"
				color="#ed0c0c"
				id="price"
			/>
			<LineChart
				historicData={historicData?.formattedHistoricTotalVolumes}
				heading="Btc Trading Volume over 30 days"
				color="#06bd30"
				id="tradeVolume"
			/>
			<LineChart
				historicData={historicData?.formattedHistoricMarketCaps}
				heading="Btc Market Capitalization over 30 days"
				color="#0742d9"
				id="MarketCap"
			/>
			<LineChart
				historicData={historicData?.formattedHistoricTrdVolsPrecentage}
				heading="Btc Trading Volume Percentage Change over 30 days. Sell below 100 mark and buy above 100 mark"
				color="#A020F0"
				id="TradeVolumePrecentChange"
			/>
		</div>
	);
}

export default App;
