import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import LineChart from './components/Charts/LineChart';
import { getBTCHistoricalPrice } from './api/coinGecko';

function App() {
	const [historicPriceData, setHistoricPriceData] = useState(null);

	useEffect(() => {
		(async () => {
			const historicPrices = await getBTCHistoricalPrice();
			setHistoricPriceData(historicPrices);

			console.log('historicPriceData', historicPriceData);
		})();
	}, []);

	return (
		<div className="App p-5">
			<LineChart historicPriceData={historicPriceData} />
		</div>
	);
}

export default App;
