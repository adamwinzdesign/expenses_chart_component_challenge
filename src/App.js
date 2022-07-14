import "./App.css";

function App() {
	return (
		<div className='App'>
			<div className='w-full min-h-screen flex items-center justify-center bg-cream_bg'>
				{/* card */}
				<div className='w-343 h-534 flex flex-col justify-between'>
					{/* balance */}
					<div className='w-343 h-97 p-38 bg-orange_main rounded-10 flex items-center justify-between'>
						<div>
							<p className='text-white font-sans text-font15 leading-5'>My balance</p>
							<h2 className='text-white font-sans font-bold text-font24 leading-31'>$921.48</h2>
						</div>

						<div className='w-72 h-12 bg-logo' />
					</div>
					{/* chart */}
					<div className='w-343 h-421 bg-card_white rounded-10'></div>
				</div>
			</div>
		</div>
	);
}

export default App;
