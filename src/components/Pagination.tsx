import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface PaginationProps {
	page: number;
	totalPages: number;
}

const Pagination: FC<PaginationProps> = (props) => {
	const navigate = useNavigate();

	const nextPage = () => {
		if (props.page < props.totalPages)
			navigate("/products/" + (props.page + 1));
	};

	const prevPage = () => {
		if (props.page > 1) navigate("/products/" + (props.page - 1));
	};

	return (
		<div className="pagination">
			<FontAwesomeIcon
				className="arrow"
				onClick={prevPage}
				icon={faArrowLeft}
			/>
			{props.page}
			<FontAwesomeIcon
				className="arrow"
				onClick={nextPage}
				icon={faArrowRight}
			/>
		</div>
	);
};

export default Pagination;
