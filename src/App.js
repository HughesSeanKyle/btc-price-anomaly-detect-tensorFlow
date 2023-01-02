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
			setHistoricData(historicData);

			const tradeVolBinance = await getBTCTradeVolBinance();

			console.log('tradeVolBinance', tradeVolBinance);
		})();
	}, []);

	return (
		<div className="App p-5">
			<LineChart
				historicData={historicData.formattedHistoricPrices}
				heading="Btc Price over 30 days"
				color="#ed0c0c"
			/>
			<LineChart
				historicData={historicData.formattedHistoricTotalVolumes}
				heading="Btc Trading Volume over 30 days"
				color="#06bd30"
			/>
			<LineChart
				historicData={historicData.formattedHistoricMarketCaps}
				heading="Btc Market Capitalization over 30 days"
				color="#0742d9"
			/>
		</div>
	);
}

export default App;
