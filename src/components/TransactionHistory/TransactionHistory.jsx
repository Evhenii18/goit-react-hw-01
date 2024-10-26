import s from "./TransactionHistory.module.css";
const TransactionHistory = ({ transactions }) => {
	return (
		<table className={s.table}>
			<thead className={s.title}>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{transactions.map((transaction) => (
					<tr
						className={s.string}
						key={transaction.id}
					>
						<td className={s.cell}>{transaction.type}</td>
						<td className={s.cell}>{transaction.amount}</td>
						<td className={s.cell}>{transaction.currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TransactionHistory;
