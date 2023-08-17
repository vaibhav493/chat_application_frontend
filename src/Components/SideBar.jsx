import "../styles/Sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ChatName from "./ChatName";
import { useState } from "react";
export default function SideBar() {
	const [conversationChats, setConversationChats] = useState([
		{
			name: "vaibhav waghmare",
			lastMessage: "chal ghuma sathi",
			lastSeen: "Today",
		},
		{
			name: "umesh waghmare",
			lastMessage: "paise pathavle",
			lastSeen: "Today",
		},
		{
			name: "rohit pillewan",
			lastMessage: "ye ghari aaj",
			lastSeen: "Today",
		},
		{
			name: "aryan meshram",
			lastMessage: "abe salya harami",
			lastSeen: "Yesterday",
		},
	]);

	return (
		<div className="side_bar_container">
			<div className="sb_header">
				<div>
					<Tooltip title="user profile">
						<IconButton>
							<AccountCircleIcon style={{ color: "gray" }} />
						</IconButton>
					</Tooltip>
				</div>
				<div>
					<Tooltip title="add person">
						<IconButton onClick={() => alert("clicked")}>
							<PersonAddAltOutlinedIcon style={{ color: "gray" }} />
						</IconButton>
					</Tooltip>

					<Tooltip title="group">
						<IconButton>
							<GroupAddOutlinedIcon style={{ color: "gray" }} />
						</IconButton>
					</Tooltip>

					<Tooltip title="add">
						<IconButton>
							<AddCircleOutlineOutlinedIcon style={{ color: "gray" }} />
						</IconButton>
					</Tooltip>
					<Tooltip title="switch theme">
						<IconButton>
							<BedtimeOutlinedIcon style={{ color: "gray" }} />
						</IconButton>
					</Tooltip>
				</div>
			</div>
			<div className="search_bar_container">
				<input id="search_bar" type="text" placeholder="seach people...." />
			</div>
			<div className="sb_chats">
				{conversationChats.map((ele, index) => {
					return <ChatName {...ele} key={index} />;
				})}
			</div>
		</div>
	);
}
