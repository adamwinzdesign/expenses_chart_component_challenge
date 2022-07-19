import "./App.css";
import Heading from "./Heading";
import Summary from "./components/Summary";
import ChartRef from "./components/ChartRef";

function App() {
	return (
		<div className='App'>
			<div className='w-full min-h-screen flex items-center justify-center bg-cream_bg'>
				{/* card */}
				<div className='w-343 h-534 flex flex-col justify-between'>
					<Heading />
					{/* chart */}
					<div className='w-343 h-421 px-5 py-6 bg-card_white rounded-10'>
						<h1 className='font-sans font-bold text-font24 leading-39'>Spending - Last 7 days</h1>
						{/* chart body */}
						<ChartRef />
						<Summary />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
