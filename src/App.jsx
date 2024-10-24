import userData from "./userData.json";
import Profile from "./components/Profile/Profile";

const App = () => {
	return (
		<div>
			<Profile
				name={userData.username}
				tag={userData.tag}
				location={userData.location}
				image={userData.avatar}
				stats={userData.stats}
			/>
		</div>
	);
};


import React from "react";
import friends from "./friends.json"; // Імпорт JSON-файлу
import FriendList from "./components/FriendList";

const App = () => {
  return (
    <div>
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
