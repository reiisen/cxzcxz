import type { Component } from "solid-js";
import type Product from "../../entities/Product";

const Card: Component<Product> = (props) => {
	return (
		<div class="z-0 flex flex-col flex-1 p-4 bg-white shadow-lg">
			<a href={`i/${props.id}`}>
				<img
					src={props.imageUrl}
					alt="product_image"
					class="w-full aspect-square object-cover rounded-md"
				/>
			</a>
			<h1 class="mt-2 mb-5 text-2xl font-semibold">
				<a href={`i/${props.id}`}>{props.name}</a>
			</h1>
			<div class="flex w-full flex-row self-end mt-auto justify-between border border-t-violet-500 border-l-transparent border-r-transparent border-b-transparent pt-3 border-t-4 bg-violet-100 px-2 pb-3 rounded-lg ">
				<span class="text-2xl font-bold text-violet-600">
					{props.price.toLocaleString("id-ID", {
						style: "currency",
						currency: "IDR",
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				</span>
				<div class="flex flex-row gap-2">
					<span class="z-10 bg-violet-500 rounded-lg py-1 px-3 text-white font-semibold">
						{props.quantity} Tersisa
					</span>
					<span class="z-10 bg-violet-500 rounded-lg py-1 px-3 text-white font-semibold">
						+
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
