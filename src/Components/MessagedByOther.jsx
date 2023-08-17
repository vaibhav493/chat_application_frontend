import { Avatar } from "@mui/material";
import "../styles/Messages.css";
export default function MessagedByOther() {
	return (
		<div className="message_container">
			<div className="message_box">
				<div className="user_avatar">
					<Avatar src="https://avatars.githubusercontent.com/u/107527535?v=4" />
				</div>
				<div className="message_info">
					<p className="namee">Name</p>
					<p className="message">hi vaibhav bro how are youhi vaibhav</p>
					<div className="message_time">
						<p> 07.30am</p>
					</div>
				</div>
			</div>
		</div>
	);
}
