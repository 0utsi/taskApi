import { FC } from "react";
import { Datum } from "../Interfaces/DataInterface";

interface detailsModalprops {
	data: Datum;
	onClose: () => void;
	isOpen: boolean;
}
const DetailsModal: FC<detailsModalprops> = (props) => {
	if (!props.isOpen) return;
	return (
		<div className="modal-bg" onClick={props.onClose}>
			<table className="detailsModal">
				<tbody>
					{Object.entries(props.data).map(([key, value]) => {
						return (
							<tr>
								<td>{key}</td>
								<td>{value}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default DetailsModal;
