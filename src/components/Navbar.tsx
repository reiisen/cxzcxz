import type { Component } from "solid-js";

const Navbar: Component = () => {
	return (
		<nav class="z-10 fixed w-screen backdrop-blur-md">
			<div class="w-full relative bg-violet-600 flex justify-center">
				<div class="w-full h-14 flex flex-row justify-evenly items-center text-white text-xl">
					<a href="/">LYRE.STORE</a>
					<ul class="flex flex-row gap-16">
						<a href="/product/">
							<li>Browse</li>
						</a>
						<a href="wedwd">
							<li>Request</li>
						</a>
						<a href="/">
							<li>Jastip</li>
						</a>
					</ul>
					<div class="flex flex-row gap-4">
						<a href="/auth/login">Account</a>
						<a href="/">EN</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
