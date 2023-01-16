import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const SearchBar = () => {
	const [idToFilter, setIdToFilter] = useState("");

	const filterById = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIdToFilter(e.target.value);
		console.log(e);
	};

	return (
		<div className="search-container">
			<form onSubmit={filterById}>
				<input
					name="option"
					autoComplete="off"
					className="search-input"
					value={idToFilter}
					onChange={(e) => setIdToFilter(e.target.value)}
				></input>
				<button className="search-btn" type="submit">
					<FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
				</button>
			</form>
		</div>
	);
};
