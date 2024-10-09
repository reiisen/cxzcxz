import type { Component } from "solid-js";
import nt from "../../assets/nt.gif";

const Loading: Component = () => {
	return <img src={nt} alt="Loading" class="m-auto" />;
};

export default Loading;
