import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";
import { useProductInCart } from "../store/productInCart";
import { useProducts } from "../Hooks/useProducts";

export default function ProductInCart() {
  const {
    productInCart,
    removeAllFromCart,
    addProductInCart,
    removeOneFromCart,
  } = useProductInCart((state) => state);

  const { data: products } = useProducts();

  let shipping = 50;
  let tax = 35;

  const handleAddProducts = (id: number) => {
    let newItem = products?.find((item) => item.id === id);
    let itemInCart = productInCart.find((item) => item.id === newItem?.id);

    addProductInCart(newItem!, itemInCart!);
  };

  const handleDeleteFromCart = (id: number, all = false) => {
    if (all) {
      removeAllFromCart(id);
    } else {
      console.log("eliminar de a un item...");
      let itemToDelete = productInCart.find((item) => item.id === id);
      removeOneFromCart(id, itemToDelete!);
    }
  };

  const priceTotal = productInCart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const priceFinal = priceTotal + shipping + tax;

  return (
    <div className="bg-white-500 container mx-auto">
      <div className="flex md:flex-row flex-col justify-end">
        <div className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white mx-5">
          <Link to="/">
            <p className="pb-5 tracking-[1px] flex flex-row items-center">
              <IoIosArrowBack className="mr-1" />
              Back
            </p>
          </Link>
          <p className="text-5xl font-black leading-10 text-gray-800 pt-3 pb-6">
            Bag
          </p>

          {productInCart.map((item) => {
            return (
              <div
                key={item.id}
                className="md:flex items-center py-8 border-t border-b border-gray-200"
              >
                <div className="h-full w-1/4">
                  <img
                    src={item.image}
                    alt="img"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="md:pl-3 md:w-3/4 w-full">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    X {item.quantity}
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">
                      {item.title}
                    </p>
                    <div className="flex gap-x-2">
                      <button onClick={() => handleDeleteFromCart(item.id)}>
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button onClick={() => handleAddProducts(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-xs leading-3 text-gray-600 pt-2">
                    {item.category}
                  </p>
                  <p className="text-xs leading-3 text-gray-600 py-4 flex gap-x-1">
                    <BsFillStarFill color="orange" />
                    {item.rating.rate}
                  </p>
                  <p className="lg:w-96 md:w-auto text-xs leading-3 text-gray-600">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                      <button
                        onClick={() => handleDeleteFromCart(item.id, true)}
                        className="text-xs leading-3 text-red-500 cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-300 h-full mt-16">
          <div className="flex flex-col md:h-screen px-14 py-20 justify-between">
            <div>
              <p className="text-4xl font-black leading-9 text-gray-800">
                Summary
              </p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none text-gray-800">Subtotal</p>
                <p className="text-base leading-none text-gray-800">
                  ${priceTotal.toString().slice(0, 7)}
                </p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Shipping</p>
                <p className="text-base leading-none text-gray-800">
                  ${shipping}
                </p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Tax</p>
                <p className="text-base leading-none text-gray-800">${tax}</p>
              </div>
            </div>
            <div>
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800">Total</p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                  ${priceFinal.toString().slice(0, 7)}
                </p>
              </div>
              <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
