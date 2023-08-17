import "../styles/CreateGroup.css";
import { Avatar, Input, Button } from "@mui/material";
// import LoadingButton from "@mui/lab/LoadingButton";

export default function CreateGroup() {
	return (
		<div className="CG-container">
			<div className="cg-main_component">
				<Avatar sx={{ width: 150, height: 150 }} src="./group_banner.png" />
				<input className="gruop_input" placeholder="Enter group name" />
				<Button color="success" variant="outlined">
					Create Group
				</Button>
			</div>
		</div>
	);
}
