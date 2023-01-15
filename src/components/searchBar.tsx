import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBar = () => {
	return (
		<div className="search-container">
			<form>
				<input
					name="option"
					autoComplete="off"
					className="search-input"
				></input>
				<button className="search-btn" type="submit">
					<FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
				</button>
			</form>
		</div>
	);
};
