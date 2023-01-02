import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const data = {
	labels: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec',
	],
	datasets: [
		{
			label: 'Price',
			data: [
				6500, 5900, 8000, 8100, 5600, 5500, 4000, 8000, 8100, 5600, 6500, 5900,
				8000,
			],
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

const LineChart = () => {
	return <Line data={data} options={options} />;
};

export default LineChart;
