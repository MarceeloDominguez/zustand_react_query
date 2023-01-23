import { useProducts } from "../Hooks/useProducts";
import { useFavoriteProductsStore } from "../store/favoriteProducts";
import Loading from "../components/Loading";
import FavoriteCardItems from "../components/FavoriteCardItems";
import { Link } from "react-router-dom";

export default function FavoritesPage() {
  const { productFavotite } = useFavoriteProductsStore((state) => state);
  const { isLoading } = useProducts();

  if (isLoading) return <Loading />;

  return (
    <div className="py-12 container mx-auto">
      <div className="sm:flex flex-col justify-start items-start">
        <Link to="/">
          <p className="pb-4 px-5 tracking-[1px]">Back</p>
        </Link>
        <div className="pl-4 flex flex-row justify-center items-end space-x-4">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            Favorites
          </h1>
          <p className="text-base leading-4 text-gray-600 pb-1">
            {productFavotite.length} Items
          </p>
        </div>
        <table className="w-full mt-16 whitespace-nowrap">
          <thead
            aria-label="table heading"
            className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b "
          >
            <tr>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                YOUR PRODUCT
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                NAME PRODUCT
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                PRICE
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
            </tr>
          </thead>
          <FavoriteCardItems />
        </table>
      </div>
    </div>
  );
}
