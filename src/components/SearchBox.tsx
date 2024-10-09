import type { Component } from "solid-js";
import type Query from "./pass/Query";

const SearchBox: Component<Query> = (props) => {
	return (
		<div class="flex flex-1 flex-row justify-center items-center mb-8 mt-4">
			<input
				type="text"
				placeholder="Cari apa hari ini?"
				id="search"
				autocomplete="off"
				class="outline-none border border-b-violet-400 border-b-4 
      border-t-transparent border-r-transparent border-l-transparent
      w-full h-16 text-2xl bg-violet-100 px-2 py-1 rounded-lg text-violet-800 placeholder:text-violet-300"
				onInput={(e) => props.setQuery(e.target.value)}
			/>
		</div>
	);
};

export default SearchBox;
