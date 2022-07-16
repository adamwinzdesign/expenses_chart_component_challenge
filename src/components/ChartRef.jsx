import { data as defaultData } from "../data.jsx";

const ChartRef = () => {
	const labels = defaultData.map((data) => data.day);
	const amount = defaultData.map((data) => data.amount);

	console.log({ labels, amount });

	return <div className='relative h-201 mt-5 mb-6'>ChartRef!</div>;
};

export default ChartRef;
