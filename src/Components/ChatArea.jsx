import "../styles/ChatArea.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import RateReviewIcon from "@mui/icons-material/RateReview";
import MessagedByOther from "./MessagedByOther";
import Avatar from "@mui/material/Avatar";
import MessagedBySelf from "./MessagedBySelf";
import Tooltip from "@mui/material/Tooltip";

export default function ChatArea() {
	return (
		<div className="chat_area_container">
			{/* below is chat area header  */}
			<div className="chat_area_header">
				<div className="user_info">
					<div className="user_avatar">
						<Avatar src="https://avatars.githubusercontent.com/u/107527535?v=4" />
					</div>
					<div className="user_name_status">
						<p className="name">Name</p>
						<p className="status">Online</p>
					</div>
				</div>
				<div className="trash_icon_container">
					<Tooltip title="Clear chat">
						<IconButton>
							<DeleteIcon style={{ color: "#ec224b" }} />
						</IconButton>
					</Tooltip>
				</div>
			</div>

			{/* below is messages container  */}

			<div className="messages_container">
				<MessagedByOther />
				<MessagedBySelf />
				<MessagedByOther />
				<MessagedBySelf />
				<MessagedByOther />
				<MessagedBySelf />
				<MessagedByOther />
			</div>

			<div className="message_input_container">
				<Input
					id="message_input"
					fullWidth
					style={{ color: "grey" }}
					disableUnderline={true}
					placeholder={"Type a message...."}
					startAdornment={
						<InputAdornment className="type_icon" position="start">
							<RateReviewIcon style={{ color: "gray" }} />
						</InputAdornment>
					}
				/>
				<Tooltip title="send message">
					<IconButton className="send_btn">
						<SendOutlinedIcon style={{ color: "lightgreen" }} />
					</IconButton>
				</Tooltip>
			</div>
		</div>
	);
}
