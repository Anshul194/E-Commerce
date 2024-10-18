import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";
import apple from "./apple.png";
import featureImg from '../../../src/assets/galaxy-image.webp';


const Row1 = () => {
  const dealItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.17.title")
  );

  return (
    <>
    <div className="flex flex-row ">
      {/* Main Content */}
      <div
        className="flex xl:my-10 xl:ml-10 xl:gap-16 items-center jusify-between flex-col-reverse 
      md:flex-row  md:h-96 bg-black text-white w-full "
      >
        <div className="flex flex-col md:max-w-72 gap-5 items-center md:items-start justify-center md:ml-16">
          <div className="max-w-72 flex jusify-center items-center gap-6">
            <img src={apple} alt="apple" />
            <h1 className="text-lg">{i18n.t("homeSections.row1.col2.0")}</h1>
          </div>
          <h2 className="text-2xl md:text-5xl leading-10">
            {i18n.t("homeSections.row1.col2.1")}
          </h2>
          <Link to="/allProducts">
            <button className="mb-8 md:mb-0 flex gap-2 underline underline-offset-8 py-2 px-6 focus:underline-offset-2  ease-in-out  duration-300 transform hover:translate-x-4">
              <span>{i18n.t("homeSections.row1.col2.2")}</span>
              <svg
                className="mt-1 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className=" relative overflow-hidden mt-4 ">
          <div className="transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
            <Link to="/allProducts">
              <img
                src={dealItem.imageSrc}
                alt={dealItem.title}
                loading="lazy"
                className="transition-transform duration-300 transform translate-y-4 hover:translate-y-0 hover:scale-102 hover:motion-safe:animate-pulse"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <section className="bg-white py-24">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-5xl font-bold mb-16">Featured Products</h2>
    <div className="grid grid-cols-1  gap-12">
      <div className="relative overflow-hidden group">
        <img
          src={featureImg} 
          alt="Featured Product"
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-white text-4xl font-bold mb-4">Samsung Ultra Watch</h3>
          <p className="text-white text-lg mb-6">
            Discover the next generation of smartwatches with cutting-edge features and premium design.
          </p>
          <p className="text-white text-2xl font-semibold mb-4">$399</p>
          <button className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
    
  );
};

export default Row1;
