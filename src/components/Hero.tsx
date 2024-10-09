import type { Component } from "solid-js";

const Hero: Component = () => {
	return (
		<div class="relative flex flex-col w-screen h-[90vh] bg-violet-600 rounded-b-3xl">
			<div class="flex flex-1 flex-row justify-center items-center text-white font-bold text-5xl">
				<span>welcome to bak</span>
			</div>
		</div>
	);
};

export default Hero;
