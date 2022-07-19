import Balance from "./Balance";

const Heading = () => {
	return (
		<div className='w-343 h-97 xl:w-540 xl:h-125 p-5 bg-orange_main rounded-10 flex items-center justify-between'>
			<Balance />
			<div className='w-60 h-10 xl:w-72 xl:h-12 bg-logo bg-cover' />
		</div>
	);
};

export default Heading;
