import "./App.css";

function App() {
	return (
		<div className='App'>
			<div className='w-full min-h-screen flex items-center justify-center bg-cream_bg'>
				{/* card */}
				<div className='w-343 h-534 flex flex-col justify-between'>
					{/* balance */}
					<div className='w-343 h-97 bg-orange_main rounded-10'></div>
					{/* chart */}
					<div className='w-343 h-421 bg-card_white rounded-10'></div>
				</div>
			</div>
		</div>
	);
}

export default App;
