import Balance from "./components/Balance";

const Heading = () => {
	return (
		<div className='w-343 h-97 p-5 bg-orange_main rounded-10 flex items-center justify-between'>
			<Balance />
			<div className='w-72 h-12 bg-logo' />
		</div>
	);
};

export default Heading;
