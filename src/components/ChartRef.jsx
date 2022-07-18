import { data as defaultData } from "../data.jsx";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js";

const chartConfig = {};

const ChartRef = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		const newChart = new Chart(chartRef.current, chartConfig);
		return () => {
			newChart.destroy();
		};
	}, [chartRef]);

	return (
		<div className='relative h-201 mt-5 mb-6'>
			<canvas ref={chartRef} id='chartRef' />
		</div>
	);
};

export default ChartRef;
