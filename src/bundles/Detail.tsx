import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import type { Component } from "solid-js";
import Loading from "../components/placeholder/Loading";
import Stupid from "../components/placeholder/Stupid";
import { fetchProduct } from "../util/Fetch";

const Detail: Component = () => {
  const params = useParams();
  const fetch = async () => await fetchProduct(Number.parseInt(params.id));
  const [product] = createResource(fetch);

  return (
    <>
      <Stupid />
      <Show when={product.state === "ready"} fallback={<Loading />}>
        <div class="w-[1200px] mx-auto flex flex-1 flex-row mt-12 bg-white shadow-lg p-7">
          <img
            src={product()?.imageUrl}
            alt="prod_img"
            class="w-1/2 aspect-square object-cover"
          />
          <div class="flex flex-1 flex-col ml-4">
            <span class="text-2xl font-bold">{product()?.name}</span>
            <span class="text-2xl font-bold text-violet-600">
              {product()?.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
              })}
            </span>
            <span class="text-xl font-bold">Sisa {product()?.quantity}!</span>
          </div>
          <div class="self-end">
            <a
              href="/"
              class="px-4 py-2 bg-orange-400 text-white font-semibold rounded-md text-2xl"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </Show>
    </>
  );
};
export default Detail;
