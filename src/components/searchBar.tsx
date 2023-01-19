import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

export const SearchBar = (props) => {
	const [idToFilter, setIdToFilter] = useState("");

	const passId = (e) => {
		e.stopPropagation();
		e.preventDefault();
		props.filterById(idToFilter);
	};

	const resetInput = (e) => {
		props.filterById("");
	};

	return (
		<div className="search-container">
			<form onSubmit={passId}>
				<FontAwesomeIcon
					className="reset"
					icon={faXmark}
					onClick={resetInput}
				/>
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
