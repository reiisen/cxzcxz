import type Product from "../entities/Product";

export const fetchProducts = async (query: string): Promise<Product[]> => {
	let retries = 10;

	while (retries > 0) {
		try {
			const result = await fetch(`http://127.0.0.1:8080/products/${query}`);
			if (result.ok) {
				return await result.json();
			}
				console.error(`Result: ${result.status}`);
			retries--;
			await new Promise((resolve) => setTimeout(resolve, 5000));
		} catch (error) {
			console.error("Can't fetch products", error);
		}
	}

	throw new Error("Failed...");
};

export const fetchProduct = async (id: number): Promise<Product> => {
	let retries = 10;

	while (retries > 0) {
		try {
			const result = await fetch(`http://127.0.0.1:8080/products/i/${id}`);
			if (result.ok) {
				return await result.json();
			}
				console.error(`Result: ${result.status}`);
			retries--;
			await new Promise((resolve) => setTimeout(resolve, 5000));
		} catch (error) {
			console.error("Can't fetch products", error);
		}
	}

	throw new Error("Failed...");
};
