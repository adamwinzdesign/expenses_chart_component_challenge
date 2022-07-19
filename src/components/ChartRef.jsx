import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { Tooltip } from "chart.js";
import { chartConfig } from "../utils/chartConfig.jsx";

Tooltip.positioners.customPosition = function (elements) {
	/** @type {Chart.Tooltip} */
	if (elements.length) {
		return { x: elements[0].element.x, y: 165 - elements[0].element.height };
	}
	return { x: null, y: null };
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
