import { type Component, For, Show } from "solid-js";
import type ProductsResponse from "../../entities/Product";
import Loading from "../placeholder/Loading";
import Card from "./Card";

const Grid: Component<ProductsResponse> = (props) => {
  return (
    <Show when={props.products.state === "ready"} fallback={<Loading />}>
      <div class="grid lg:grid-cols-3 grid-cols-2 gap-4">
        <For each={props.products()}>
          {(product) => (
            <Card
              id={product.id}
              name={product.name}
              quantity={product.quantity}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          )}
        </For>
      </div>
    </Show>
  );
};

export default Grid;
