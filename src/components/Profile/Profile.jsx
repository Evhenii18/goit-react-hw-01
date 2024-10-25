import clsx from "clsx";
import s from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
	return (
		<div>
			<div className={s.wrapper}>
				<div className={s.card}>
					<img
						src={image}
						alt="User avatar"
						className="profile-image"
					/>
					<p className={s.title}>{name}</p>
					<p className={clsx(s.nickname, s.gray)}>{tag}</p>
					<p className={clsx(s.location, s.gray)}>{location}</p>
					<ul className={s.list}>
						<li>
							<span>Followers </span>
							<span className={s.bold}>{stats.followers}</span>
						</li>
						<li>
							<span>Views </span>
							<span className={s.bold}>{stats.view}</span>
						</li>
						<li>
							<span>Likes </span>
							<span className={s.bold}>{stats.likes}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Profile;
