import "./App.css";
import productsAPI from "./API/productsAPI";
import { useEffect } from "react";
import { SearchBar } from "./components/searchBar";
import { useState } from "react";

function App() {
	const [currentPageItems, setCurrentPageItems] = useState<any[]>([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		productsAPI
			.get("/api/products", {
				params: {
					page: page,
				},
			})
			.then((res) => {
				console.log(res);
				setCurrentPageItems(res.data.data);
				console.log(currentPageItems);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="App">
			<SearchBar />
			<table>
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">name</th>
						<th scope="col">year</th>
					</tr>
				</thead>
				<tbody>
					{currentPageItems.map((item) => {
						return (
							<tr style={{ backgroundColor: item.color }}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.year}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<button>Dalej</button>

			<button>Cofnij</button>
		</div>
	);
}

export default App;
