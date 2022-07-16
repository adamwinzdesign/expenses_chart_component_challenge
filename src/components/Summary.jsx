const Summary = () => {
	return (
		<>
			<div className='w-full h-px bg-cream_bg' />
			<div className='w-full h-63 mt-5 flex justify-between'>
				<div className='flex flex-col items-start justify-start'>
					<p className='font-sans text-font15 text-medium_brown leading-5'>Total this month</p>
					<h2 className='font-sans font-bold text-font30 leading-39'>$478.33</h2>
				</div>
				<div className='flex flex-col items-end justify-end'>
					<h3 className='font-sans font-bold text-font15 leading-5'>+2.4%</h3>
					<p className='font-sans text-font15 text-medium_brown leading-5'>from last month</p>
				</div>
			</div>
		</>
	);
};

export default Summary;
