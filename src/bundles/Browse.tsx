import { Show, createResource, createSignal } from "solid-js";
import type { Component } from "solid-js";
import SearchBox from "../components/SearchBox";
import NoResult from "../components/placeholder/NoResult";
import Stupid from "../components/placeholder/Stupid";
import Grid from "../components/product/Grid";
import { fetchProducts } from "../util/Fetch";

const Browse: Component = () => {
  const [query, setQuery] = createSignal<string>("");
  const fetch = async () => {
    return await fetchProducts(query());
  };
  const [products] = createResource(query, fetch);

  return (
    <>
      {/* whitespace */}
      <Stupid />
      <div class="xl:w-[1200px] lg:px-6 md:px-4 m-auto">
        <SearchBox setQuery={setQuery} />
        <Show when={products()?.length === 0 && !products.loading}>
          <NoResult />
        </Show>
        <Grid products={products} />
      </div>
    </>
  );
};

export default Browse;
