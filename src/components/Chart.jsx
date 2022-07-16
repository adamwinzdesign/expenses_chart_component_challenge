import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement } from "chart.js";

ChartJS.register(BarElement);

const Chart = ({ options, data }) => {
	return (
		<div className='relative h-201 mt-5 mb-6'>
			<Bar options={options} data={data} />
		</div>
	);
};

export default Chart;
