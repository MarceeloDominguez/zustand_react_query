import { useProducts } from "../Hooks/useProducts";
import { useFavoriteProductsStore } from "../store/favoriteProducts";

export default function FavoriteCardItems() {
  const { productFavotite, removeFavoriteProducts } = useFavoriteProductsStore(
    (state) => state
  );
  const { data: products } = useProducts();

  return (
    <>
      {productFavotite.map((favorite, index) => {
        const filteredProductFavorites = products?.find(
          (item) => item.id === favorite
        );

        return (
          <tbody key={index} className="w-full text-left">
            <tr className="border-gray-200 border-b  ">
              <th>
                <img
                  className="my-10 pl-4 lg:pl-10 2xl:pl-20 w-[250px]"
                  src={filteredProductFavorites?.image}
                  alt="product"
                />
              </th>
              <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                <p className=" text-base leading-4 text-gray-800">
                  {filteredProductFavorites?.title.slice(0, 20)}
                </p>
              </th>
              <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                <p>${filteredProductFavorites?.price}</p>
              </th>
              <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                <button
                  onClick={() =>
                    removeFavoriteProducts(filteredProductFavorites?.id!)
                  }
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"
                >
                  <p>Remove favorite</p>
                </button>
              </th>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
