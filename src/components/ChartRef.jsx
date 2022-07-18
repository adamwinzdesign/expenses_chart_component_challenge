import { data as defaultData } from "../data.jsx";
import { useRef, useEffect } from "react";
// import { Chart, BarElement } from "chart.js/auto";
import Chart from "chart.js/auto";

// Chart.register(BarElement);

const labels = defaultData.map((data) => data.day);
const amount = defaultData.map((data) => data.amount);

const data = {
	labels: labels,
	datasets: [
		{
			data: amount,
			backgroundColor: function (context) {
				const today = new Date().getDay() - 1;
				const index = context.dataIndex;
				return index === today ? "#76B5BC" : "#EC755D";
			},
			hoverBackgroundColor: function (context) {
				const today = new Date().getDay() - 1;
				const index = context.dataIndex;
				return index === today ? "#B4E0E5" : "#FF9B86";
			},
			borderSkipped: false,
			borderRadius: 5,
			datalabels: {
				display: true,
			},
		},
	],
};

const chartConfig = {
	type: "bar",
	data,
	options: {
		onHover: (event, chartElement) => {
			event.native.target.style.cursor = chartElement[0] ? "pointer" : "default";
		},
	},
};

const ChartRef = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		const newChart = new Chart(chartRef.current, chartConfig);
		return () => {
			newChart.destroy();
		};
	}, [chartRef]);

	return (
		<div className='border-2 relative h-201 mt-5 mb-6 flex items-end'>
			<canvas ref={chartRef} id='chartRef' />
		</div>
	);
};

export default ChartRef;
