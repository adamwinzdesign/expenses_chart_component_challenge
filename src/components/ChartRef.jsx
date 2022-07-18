import { data as defaultData } from "../data.jsx";
import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

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

const labelTooltip = (context) => {
	let label = context.dataset.label || "";

	if (label) {
		label += ": ";
	}
	if (context.parsed.y !== null) {
		label += new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(context.parsed.y);
	}
	return label;
};

const chartConfig = {
	type: "bar",
	data,
	options: {
		onHover: (event, chartElement) => {
			event.native.target.style.cursor = chartElement[0] ? "pointer" : "default";
		},
		scales: {
			y: {
				display: false,
				beginAtZero: true,
				ticks: { display: false },
				grid: { display: false },
			},
			x: {
				grid: { display: false, borderWidth: 0, ticks: { display: true, color: "#92857A" } },
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				// yAlign: "bottom",
				xAlign: "center",
				caretSize: 0,
				displayColors: false,
				bodyFont: {
					family: "DM Sans",
					weight: 700,
					color: "#FFFBF6",
					size: "20px",
				},
				callbacks: {
					label: labelTooltip,
					title: () => "",
				},
				opacity: 1,
			},
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
