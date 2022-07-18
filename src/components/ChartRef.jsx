import { data as defaultData } from "../data.jsx";
import { useRef } from "react";
import Chartjs from "chart.js";

const ChartRef = () => {
	const chartRef = useRef(null);

	const labels = defaultData.map((data) => data.day);
	const amount = defaultData.map((data) => data.amount);

	const data = {
		labels: labels,
		datasets: [
			{
				data: amount,
				backgroundColor: "#f00",
				hoverBackgroundColor: "purple",
				borderSkipped: false,
				borderRadius: 5,
				datalabels: {
					display: true,
				},
			},
		],
	};

	const config = {
		type: "bar",
		data,
		options: {
			onHover: (event, chartElement) => console.log({ event, chartElement }),
		},
		scales: {},
		plugins: {},
	};

	return (
		<div className='relative h-201 mt-5 mb-6'>
			<canvas ref={chartRef} />
		</div>
	);
};

export default ChartRef;
