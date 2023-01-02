import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LineChart = ({ historicData, heading, color }) => {
	console.log('historicData', historicData);

	const data = {
		labels: historicData?.xAxisFormattedArr,
		datasets: [
			{
				label: 'Price',
				data: historicData?.yAxisFormattedArr,
				borderColor: color,
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
	return (
		<div>
			<h1 className="mt-3">{heading}</h1>
			<Line data={data} options={options} />
		</div>
	);
};

export default LineChart;
