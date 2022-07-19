import { data as defaultData } from "../data.jsx";
import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { Tooltip } from "chart.js";

Tooltip.positioners.customPosition = function (elements) {
	/** @type {Chart.Tooltip} */
	if (elements.length) {
		// console.log(elements[0].element);
		return { x: elements[0].element.x, y: 165 - elements[0].element.height };
	}
	return { x: null, y: null };
};

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
		maintainAspectRatio: false,
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
				ticks: { display: true, color: "#92857A" },
				grid: { display: false, borderWidth: 0 },
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				yAlign: "bottom",
				caretSize: 0,
				displayColors: false,
				position: "customPosition",
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
		<div className='relative h-201 mt-5 mb-6 flex items-end'>
			<canvas ref={chartRef} id='chartRef' />
		</div>
	);
};

export default ChartRef;
