import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface PaginationProps {
	nextPage: () => void;
	prevPage: () => void;
	page: number;
}

const Pagination: FC<PaginationProps> = (props) => {
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
};

export default Pagination;
