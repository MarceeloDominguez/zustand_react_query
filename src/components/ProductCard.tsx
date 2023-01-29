import { useProducts } from "../Hooks/useProducts";
import { Product } from "../interfaces/product";
import { useFavoriteProductsStore } from "../store/favoriteProducts";
import { useProductInCart } from "../store/productInCart";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { image, title, price, id } = product;

  const { addProductInCart, productInCart: cart } = useProductInCart(
    (state) => state
  );
  const { data: products } = useProducts();

  const { addFavoriteProducts, removeFavoriteProducts, productFavotite } =
    useFavoriteProductsStore((state) => state);

  const isFavorite = productFavotite.includes(id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteProducts(id);
      return;
    }
    addFavoriteProducts(id);
  };

  const handleAddProducts = (id: number) => {
    let newItem = products?.find((item) => item.id === id);
    let itemInCart = cart.find((item) => item.id === newItem?.id);

    addProductInCart(newItem!, itemInCart!);
  };

  const productInCartTextButton = cart.find((item) => item.id === id);

  return (
    <div className="relative">
      <div className="relative group bg-white h-[500px] flex items-center shadow-lg">
        <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
        <img
          className="w-full h-[400px] object-contain"
          src={image}
          alt="img"
        />
        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
          <button
            disabled={productInCartTextButton?.id ? true : false}
            onClick={() => handleAddProducts(id)}
            className={`${
              productInCartTextButton ? "opacity-50" : "opacity-none"
            } font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full`}
          >
            {productInCartTextButton?.id ? "Product In Cart" : "Add to cart"}
          </button>
          <button
            onClick={toggleFavorite}
            className={`bg-transparent font-medium text-base leading-4 border-2 ${
              isFavorite ? "border-red-600" : "border-white"
            } py-3 w-full mt-2 ${isFavorite ? "text-red-600" : "text-white"}`}
          >
            {isFavorite ? "Remove Favorite" : "Add to favorites"}
          </button>
        </div>
      </div>
      <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
        {title}
      </p>
      <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
        ${price}
      </p>
    </div>
  );
}
