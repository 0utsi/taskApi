import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

export const SearchBar = (props) => {
	const [idToFilter, setIdToFilter] = useState("");

	const passId = (e) => {
		e.stopPropagation();
		e.preventDefault();

		props.filterById(idToFilter);
	};

	return (
		<div className="search-container">
			<form onSubmit={passId}>
				<input
					autoComplete="off"
					type="number"
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
