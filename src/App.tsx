import "./App.css";
import productsAPI from "./API/productsAPI";

function App() {
	console.log(
		productsAPI
			.get("/api/products")
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
	);

	return (
		<div className="App">
			<input
				type="text"
				className="filter"
				placeholder="Filter products by ID"
			/>
		</div>
	);
}

export default App;
