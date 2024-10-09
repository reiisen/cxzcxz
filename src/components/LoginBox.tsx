import type { Component } from "solid-js";

const LoginBox: Component = () => {
	return (
		<div>
			<input type="text" name="username" id="username" />
			<input type="text" name="password" id="password" />
		</div>
	);
};

export default LoginBox;
