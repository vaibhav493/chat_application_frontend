import SideBar from "./SideBar";
import WorkArea from "./WorkArea";
import ChatArea from "./ChatArea";
import "../styles/MainBody.css";
import WelcomePage from "./WelcomePage";
import CreateGroup from "./CreateGroup";
export default function MainBody() {
	return (
		<div className="main_container">
			<SideBar />
			<ChatArea />
			{/* <WelcomePage/> */}
			{/* <CreateGroup /> */}
		</div>
	);
}
