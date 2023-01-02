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
			<LineChart historicData={historicData} heading="Btc Price over 30 days" />
			<LineChart historicData={historicData} heading="Btc Price over 30 days" />
			<LineChart historicData={historicData} heading="Btc Price over 30 days" />
		</div>
	);
}

export default App;
