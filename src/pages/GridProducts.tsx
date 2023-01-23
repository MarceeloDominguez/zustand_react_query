import { useProducts } from "../Hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Loading from "../components/Loading";

export default function GridProducts() {
  const { data: products, isLoading } = useProducts();

  if (isLoading) return <Loading />;

  return (
    <>
      <Header />
      <div className="2xl:container 2xl:mx-auto bg-white">
        <div className=" py-6 lg:px-20 md:px-6 px-4">
          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
            {products?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
