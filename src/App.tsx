import "./App.css";
import productsAPI from "./API/productsAPI";
import { useEffect } from "react";
import { SearchBar } from "./components/searchBar";
import { useState } from "react";

function App() {
	const [response, setResponse] = useState(null);
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
				setCurrentPageItems(res.data.data);
				setResponse(res.data);
			})
			.catch((err) => console.log(err));
	}, [page]);

	const nextPage = () => {
		if (page < response.total_pages) setPage(page + 1);
	};
	const prevPage = () => {
		if (page > 1) setPage(page - 1);
	};

	if (!response) return <span>Loading...</span>;
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
							<tr style={{ backgroundColor: item.color }} key={item.id}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.year}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<button onClick={nextPage}>Dalej</button>
			<button onClick={prevPage}>Cofnij</button>
		</div>
	);
}

export default App;
