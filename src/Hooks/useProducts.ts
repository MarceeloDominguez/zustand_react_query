import { Products } from "../interfaces/product";
import { useQuery } from "react-query";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;
}

export function useProducts() {
  return useQuery<Products[]>("products", fetchProducts);
}
