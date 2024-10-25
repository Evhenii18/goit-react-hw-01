const List = ({ data }) => {
	return (
		<div>
			<h2>Films</h2>
			<ul>
				{data.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
				<li>Taxi</li>
				<li>Garri</li>
				<li>Bonny</li>
			</ul>
		</div>
	);
};
export default List;
