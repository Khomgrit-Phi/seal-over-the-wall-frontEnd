import FavoriteMenu from "../productPage/FavoriteMenu";
import AddToCart from "../productPage/AddToCart";

const ProductRelateCard = ({ item }) => {

  return (
    <div>
      <div class="w-full h-auto bg-[#F4F4F5]">
      <div className="relative overflow-hidden ">
          <img
            src={item.imageSource}
            alt={item.name}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-2 right-2  z-10 ">
          <FavoriteMenu />
          </div>
          
        </div>
        <div class="p-4">
       

          <h6 class="text-2xl">{item.name}</h6>
          <p class="text-xl">{item.price}</p>
          <div class="flex justify-between items-center">
          <div className="flex gap-2  items-center mb-2  justify-center">
            <div className="flex items-center gap-1 text-xs  ">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`${
                    i + 1 <= Math.floor(item.reviews)
                      ? "fa-solid fa-star text-[#334DD8]"
                      : i < item.reviews
                      ? "fa-solid fa-star-half-stroke text-[#334DD8]"
                      : "fa-regular fa-star text-gray-300"
                  }`}
                ></i>
              ))}
              {/* <span className="text-sm text-gray-600 ml-2">
                  {item.reviews} / 5
                </span> */}
            </div>
            <p className="">( {item.reviewCount} )</p>
          </div>
            <AddToCart item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductRelateCard;
