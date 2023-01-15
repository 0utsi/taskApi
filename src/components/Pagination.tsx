import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Pagination(props) {
	return (
		<div className="pagination">
			<FontAwesomeIcon
				className="arrow"
				onClick={props.prevPage}
				icon={faArrowLeft}
			/>
			{props.page}
			<FontAwesomeIcon
				className="arrow"
				onClick={props.nextPage}
				icon={faArrowRight}
			/>
		</div>
	);
}
