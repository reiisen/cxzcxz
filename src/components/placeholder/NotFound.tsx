import type { Component } from "solid-js";
import huo from "../../assets/huo.gif";

const NotFound: Component = () => {
	return (
		<div class="flex flex-col justify-center items-center w-screen h-screen">
			<img src={huo} alt="Loading" />
			<h1 class="text-3xl mt-6 font-bold">
				Sorry, the requested page is not found..
			</h1>
		</div>
	);
};

export default NotFound;
