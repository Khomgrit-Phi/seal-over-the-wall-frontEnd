import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router";
import AddToCart from "./AddToCart";
import FavoriteMenu from "./FavoriteMenu";

const ProductCard = ({ item }) => {
  const { addItemToCart } = useAuth();

  if (!item) {
    return null;
  }
  const random = Math.floor(Math.random() * item.images?.length)
  return (
    <Link to={`/shop/${item._id}`} className="relative w-[248px] h-auto bg-white hover:shadow-lg hover:scale-105 hover:transition duration-300 cursor-pointer">
      <div className="relative overflow-hidden ">
        <img
          src={`/${item.images?.[random]}`}
          alt={item.title}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-2 right-2  z-10 ">
          <FavoriteMenu />
        </div>

      </div>
      <div className="p-4 text-center">
        <h6 className="text-2xl mb-2">{item.title}</h6>
        <p className="text-xl mb-2">{item.price}</p>

        <div className="flex gap-2  items-center mb-2  justify-center">
          <div className="flex items-center gap-1 text-xs  ">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`${i + 1 <= Math.floor(item.reviews || 0)
                  ? "fa-solid fa-star text-[#334DD8]"
                  : i < (item.reviews || 0)
                    ? "fa-solid fa-star-half-stroke text-[#334DD8]"
                    : "fa-regular fa-star text-gray-300"
                  }`}
              ></i>
            ))}
            {/* <span className="text-sm text-gray-600 ml-2">
                  {item.reviews} / 5
                </span> */}
          </div>
          <p className="">( {item.reviewCount || 0} )</p>
        </div>

        <AddToCart item={item} addItemToCart={addItemToCart} random={random} />
      </div>
    </Link>
  );
};
export default ProductCard;
