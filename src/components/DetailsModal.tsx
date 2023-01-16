import { FC } from "react";
import { Datum } from "../Interfaces/DataInterface";

interface detailsModalprops {
	data: Datum;
}
const DetailsModal: FC<detailsModalprops> = (props) => {
	return (
		<table>
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
	);
};

export default DetailsModal;
