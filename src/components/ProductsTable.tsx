export function ProductsTable(props) {
	return (
		<table>
			<thead>
				<tr className="rowHeader">
					<th scope="col">ID</th>
					<th scope="col">name</th>
					<th scope="col">year</th>
				</tr>
			</thead>
			<tbody>
				{props.currentPageItems.map((item) => {
					return (
						<tr
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
	);
}
