import "./App.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import { Bar, Chart } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const getOrCreateTooltip = (chart) => {
	let tooltipEl = chart.canvas.parentNode.querySelector("div");

	if (!tooltipEl) {
		tooltipEl = document.createElement("div");
		tooltipEl.style.background = "rgba(0, 0, 0, 0.7)";
		tooltipEl.style.borderRadius = "3px";
		tooltipEl.style.color = "white";
		tooltipEl.style.opacity = 1;
		tooltipEl.style.pointerEvents = "none";
		tooltipEl.style.position = "absolute";
		tooltipEl.style.transform = "translate(-50%, 0)";
		tooltipEl.style.transition = "all .1s ease";

		const table = document.createElement("table");
		table.style.margin = "0px";

		tooltipEl.appendChild(table);
		chart.canvas.parentNode.appendChild(tooltipEl);
	}

	return tooltipEl;
};

const externalTooltipHandler = (context) => {
	// Tooltip Element
	const { chart, tooltip } = context;
	const tooltipEl = getOrCreateTooltip(chart);

	// Hide if no tooltip
	if (tooltip.opacity === 0) {
		tooltipEl.style.opacity = 0;
		return;
	}

	// Set Text
	if (tooltip.body) {
		const titleLines = tooltip.title || [];
		const bodyLines = tooltip.body.map((b) => b.lines);

		const tableHead = document.createElement("thead");

		titleLines.forEach((title) => {
			const tr = document.createElement("tr");
			tr.style.borderWidth = 0;

			const th = document.createElement("th");
			th.style.borderWidth = 0;
			const text = document.createTextNode(title);

			th.appendChild(text);
			tr.appendChild(th);
			tableHead.appendChild(tr);
		});

		const tableBody = document.createElement("tbody");
		bodyLines.forEach((body, i) => {
			const colors = tooltip.labelColors[i];

			const span = document.createElement("span");
			span.style.background = colors.backgroundColor;
			span.style.borderColor = colors.borderColor;
			span.style.borderWidth = "2px";
			span.style.marginRight = "10px";
			span.style.height = "10px";
			span.style.width = "10px";
			span.style.display = "inline-block";

			const tr = document.createElement("tr");
			tr.style.backgroundColor = "inherit";
			tr.style.borderWidth = 0;

			const td = document.createElement("td");
			td.style.borderWidth = 0;

			const text = document.createTextNode(body);

			td.appendChild(span);
			td.appendChild(text);
			tr.appendChild(td);
			tableBody.appendChild(tr);
		});

		const tableRoot = tooltipEl.querySelector("table");

		// Remove old children
		while (tableRoot.firstChild) {
			tableRoot.firstChild.remove();
		}

		// Add new children
		tableRoot.appendChild(tableHead);
		tableRoot.appendChild(tableBody);
	}

	const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

	// Display, position, and set styles for font
	tooltipEl.style.opacity = 1;
	tooltipEl.style.left = positionX + tooltip.caretX + "px";
	tooltipEl.style.top = positionY + tooltip.caretY + "px";
	tooltipEl.style.font = tooltip.options.bodyFont.string;
	tooltipEl.style.padding = tooltip.options.padding + "px " + tooltip.options.padding + "px";
};

const options = {
	maintainAspectRatio: false,
	plugins: {
		tooltip: {
			enabled: false,
			position: "nearest",
			external: externalTooltipHandler,
			// chart: Chart,
			// backgroundColor: "#382314",
			// caretSize: 0,
			// displayColors: false,
			// opacity: 1,
			// titleFont: {
			// 	size: 0,
			// },
			// titleMarginBottom: 0,
			// bodyFont: {
			// 	size: 18,
			// },
			// callbacks: {
			// 	label: function (tooltipItems) {
			// 		return "$" + tooltipItems.formattedValue;
			// 	},
			// },
			// yAlign: "top",
		},
	},
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			grid: {
				display: false,
			},
			ticks: {
				display: false,
			},
		},
	},
};

const labels = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const data = {
	labels,
	datasets: [
		{
			label: "",
			data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
			backgroundColor: [
				"#EC755D",
				"#EC755D",
				"#76B5BC",
				"#EC755D",
				"#EC755D",
				"#EC755D",
				"#EC755D",
			],
			borderRadius: 5,
		},
	],
};

function App() {
	return (
		<div className='App'>
			<div className='w-full min-h-screen flex items-center justify-center bg-cream_bg'>
				{/* card */}
				<div className='w-343 h-534 flex flex-col justify-between'>
					{/* balance */}
					<div className='w-343 h-97 p-5 bg-orange_main rounded-10 flex items-center justify-between'>
						<div>
							<p className='text-white font-sans text-font15 leading-5'>My balance</p>
							<h2 className='text-white font-sans font-bold text-font24 leading-31'>$921.48</h2>
						</div>

						<div className='w-72 h-12 bg-logo' />
					</div>
					{/* chart */}
					{/* px-5 py-6 */}
					<div className='w-343 h-421 px-5 py-6 bg-card_white rounded-10'>
						<h1 className='font-sans font-bold text-font24 leading-39'>Spending - Last 7 days</h1>
						{/* chart body */}
						<div className='relative h-201 mt-5 mb-6'>
							<Bar options={options} data={data} />
						</div>

						{/* summary */}
						<div className='w-full h-px bg-cream_bg' />
						<div className='w-full h-63 mt-5 flex justify-between'>
							<div className='flex flex-col items-start justify-start'>
								<p className='font-sans text-font15 text-medium_brown leading-5'>
									Total this month
								</p>
								<h2 className='font-sans font-bold text-font30 leading-39'>$478.33</h2>
							</div>
							<div className='flex flex-col items-end justify-end'>
								<h3 className='font-sans font-bold text-font15 leading-5'>+2.4%</h3>
								<p className='font-sans text-font15 text-medium_brown leading-5'>from last month</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
