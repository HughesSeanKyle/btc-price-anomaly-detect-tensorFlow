import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import LineChart from './components/Charts/LineChart';
import { getBTCHistoricalPrice } from './api/coinGecko';

function App() {
	useEffect(() => {
		(async () => {
			await getBTCHistoricalPrice();
		})();
	});

	return (
		<div className="App p-5">
			<LineChart />
		</div>
	);
}

export default App;
