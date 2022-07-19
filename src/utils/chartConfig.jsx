import { data as defaultData } from "../data.jsx";

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

export const chartConfig = {
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
