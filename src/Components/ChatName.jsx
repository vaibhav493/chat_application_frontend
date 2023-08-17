import "../styles/ChatName.css";
import Avatar from "@mui/material/Avatar";

export default function ChatName({ lastSeen, lastMessage, name }) {
	return (
		<div className="chat_name_container" >
			<div className="user_avatar">
				<Avatar src="https://avatars.githubusercontent.com/u/107527535?v=4" />
			</div>
			<div className="user_chat_content">
				<div className="conver_history">
					<div className="user_name">
						<p>{name}</p>
					</div>
					<div className="last_seen">
						<p>{lastSeen}</p>
					</div>
				</div>
				<div className="last_message">
					<p>{lastMessage}</p>
				</div>
			</div>
		</div>
	);
}
