import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import "../index.css";
import friends from "../friendsData.json";
import "modern-normalize";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";

const App = () => {
	return (
		<>
			<Profile
				image={userData.avatar}
				name={userData.username}
				tag={userData.tag}
				location={userData.location}
				stats={userData.stats}
			/>

			<FriendList friends={friends} />
			<TransactionHistory transactions={transactions} />
		</>
	);
};

export default App;
