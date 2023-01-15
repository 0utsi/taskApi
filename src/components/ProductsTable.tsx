import { FC, useState } from "react";

interface ProductProps {
	currentPageItems: any;
}

const ProductsTable: FC<ProductProps> = (props) => {
	const [openedModal, setOpenedModal] = useState<any>(null);

	const openInfoModal = (i) => {
		console.log(props.currentPageItems[openedModal]);
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
					{props.currentPageItems.map((item, i) => {
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
			{openedModal && <div className="infoModal"></div>}
		</>
	);
};

export default ProductsTable;
