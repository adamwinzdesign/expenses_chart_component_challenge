import "./App.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import { Bar, Chart } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const options = {
	maintainAspectRatio: false,
	plugins: {
		tooltip: {
			chart: Chart,
			backgroundColor: "#382314",
			caretSize: 0,
			displayColors: false,
			opacity: 1,
			titleFont: {
				size: 0,
			},
			titleMarginBottom: 0,
			bodyFont: {
				size: 18,
			},
			callbacks: {
				label: function (tooltipItems) {
					return "$" + tooltipItems.formattedValue;
				},
			},
			yAlign: "top",
			x: 50,
			y: 100,
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
