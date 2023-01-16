import { FC, useState } from "react";
import { Datum } from "../Interfaces/DataInterface";
import DetailsModal from "./DetailsModal";

interface productTableProps {
	data: Datum[] | Datum;
}

const ProductsTable: FC<productTableProps> = (props) => {
	const [openedModal, setOpenedModal] = useState<any>(null);

	const openInfoModal = (i) => {
		setOpenedModal(i);
	};

	return (
		<>
			<table className="productsDetails">
				<thead className="tHead">
					<tr className="rowHeader">
						<th scope="col">ID</th>
						<th scope="col">name</th>
						<th scope="col">year</th>
					</tr>
				</thead>

				<tbody className="tBody">
					{Array.isArray(props.data) ? (
						props.data.map((item, i) => {
							return (
								<tr
									onClick={() => openInfoModal(i)}
									style={{
										backgroundColor: item.color,
									}}
									key={item.id}
								>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.year}</td>
								</tr>
							);
						})
					) : (
						<tr
							style={{
								backgroundColor: props.data.color,
							}}
							key={props.data.id}
						>
							<td>{props.data.id}</td>
							<td>{props.data.name}</td>
							<td>{props.data.year}</td>
						</tr>
					)}
				</tbody>
			</table>
			<DetailsModal
				onClose={() => setOpenedModal(null)}
				isOpen={openedModal !== null}
				data={props.data[openedModal]}
			/>
		</>
	);
};

export default ProductsTable;
