import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LineChart = ({ historicData }) => {
	console.log('historicData', historicData);

	const data = {
		labels: historicData?.formattedHistoricPrices.xAxisFormattedArr,
		datasets: [
			{
				label: 'Price',
				data: historicData?.formattedHistoricPrices.yAxisFormattedArr,
				borderColor: '#3e95cd',
				fill: false,
			},
		],
	};

	const options = {
		legend: {
			display: false,
		},
		scales: {
			yAxes: [
				{
					scaleLabel: {
						display: true,
						labelString: 'Price',
					},
					type: 'linear',
				},
			],
			xAxes: [
				{
					scaleLabel: {
						display: true,
						labelString: 'Date',
					},
					type: 'linear',
				},
			],
		},
	};
	return <Line data={data} options={options} />;
};

export default LineChart;
