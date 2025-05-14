import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Link } from "react-router";
import AddToCart from "./AddToCart";
import FavoriteMenu from "./FavoriteMenu";

const ProductCard = ({ item }) => {
  const { addItemToCart } = useAuth();
  const [randomIndex] = useState(Math.floor(Math.random() * (item.images?.length || 1)));
  const minRating = 3;
  const maxRating = 5;
  const ratingSteps = (maxRating - minRating) / 0.5 + 1;
  const [randomRating] = useState(() => {
    const randomStep = Math.floor(Math.random() * ratingSteps);
    return minRating + randomStep * 0.5;
  });
  const [randomReviewCount] = useState(Math.floor(Math.random() * 400));

  if (!item) {
    return null;
  }
  return (
    <Link to={`/shop/${item._id}`} className="relative w-[248px] h-auto bg-white hover:shadow-lg hover:scale-105 hover:transition duration-300 cursor-pointer">
      <div className="relative overflow-hidden ">
        <img
          src={`${item.images?.[randomIndex]}`}
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
                className={`${i + 1 <= Math.floor(randomRating)
                  ? "fa-solid fa-star text-[#334DD8]"
                  : i < (randomRating || 0)
                    ? "fa-solid fa-star-half-stroke text-[#334DD8]"
                    : "fa-regular fa-star text-gray-300"
                  }`}
              ></i>
            ))}
          </div>
          <p className="">( {randomReviewCount} )</p>
        </div>

        <AddToCart item={item} addItemToCart={addItemToCart} random={randomIndex} />
      </div>
    </Link>
  );
};
export default ProductCard;
