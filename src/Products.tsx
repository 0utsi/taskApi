import "./App.css";
import productsAPI from "./API/productsAPI";
import { useEffect } from "react";
import { SearchBar } from "./components/searchBar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsTable from "./components/ProductsTable";
import Pagination from "./components/Pagination";
import { ProductsResponseData } from "./Interfaces/DataInterface";

function Products() {
	const [response, setResponse] = useState<ProductsResponseData>(null);
	const params = useParams();
	const page: number = params.page ? parseInt(params.page) : 1;

	useEffect(() => {
		productsAPI
			.get("/api/products", {
				params: {
					page: params.page,
				},
			})
			.then((res) => {
				setResponse(res.data);
			})
			.catch((err) => console.log(err));
	}, [params.page]);

	if (!response) return <span>Loading...</span>;
	return (
		<div className="App">
			<SearchBar />
			<ProductsTable data={response.data} />
			<Pagination page={page} totalPages={response.total_pages} />
		</div>
	);
}

export default Products;
