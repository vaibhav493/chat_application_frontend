import "../styles/Login.css";
export default function Login() {
	return (
		<div className="login_container">
			<div className="LG_banner">
				<img src="./welcome_banner.png" alt="" />
			</div>
			<div className="login_form_container">
				<div className="login-box">
					<p>Login </p>
					<form>
						<div className="user-box">
							<input required="" name="" type="text" />
							<label>user name</label>
						</div>
						<div className="user-box">
							<input required="" name="" type="password" />
							<label>Password</label>
						</div>
						<a href="#">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Submit
						</a>
					</form>
				</div>
			</div>
		</div>
	);
}
