import { FC, useState } from "react";
import { Datum } from "../Interfaces/DataInterface";
import DetailsModal from "./DetailsModal";

interface productDataInterface {
	data: Datum[];
}

const ProductsTable: FC<productDataInterface> = (props) => {
	const [openedModal, setOpenedModal] = useState<any>(null);

	const openInfoModal = (i) => {
		console.log(props.data[openedModal]);
		setOpenedModal(i);
	};

	return (
		<>
			<table>
				<thead>
					<tr className="rowHeader">
						<th scope="col">ID</th>
						<th scope="col">name</th>
						<th scope="col">year</th>
					</tr>
				</thead>
				<tbody>
					{props.data.map((item, i) => {
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
					})}
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
