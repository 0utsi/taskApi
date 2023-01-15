import "./App.css";
import productsAPI from "./API/productsAPI";
import { useEffect } from "react";
import { SearchBar } from "./components/searchBar";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsTable from "./components/ProductsTable";
import Pagination from "./components/Pagination";

function Products() {
	const [response, setResponse] = useState<any>();
	const [currentPageItems, setCurrentPageItems] = useState<any[]>([]);
	const params = useParams();
	const page: number = params.page ? parseInt(params.page) : 1;
	const navigate = useNavigate();

	useEffect(() => {
		productsAPI
			.get("/api/products", {
				params: {
					page: params.page,
				},
			})
			.then((res) => {
				setCurrentPageItems(res.data.data);
				setResponse(res.data);
			})
			.catch((err) => console.log(err));
	}, [params.page]);

	const nextPage = () => {
		if (page < response.total_pages) navigate("/products/" + (page + 1));
	};
	const prevPage = () => {
		if (page > 1) navigate("/products/" + (page - 1));
	};

	if (!response) return <span>Loading...</span>;
	return (
		<div className="App">
			<SearchBar />
			<ProductsTable currentPageItems={currentPageItems} />
			<Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
		</div>
	);
}

export default Products;
