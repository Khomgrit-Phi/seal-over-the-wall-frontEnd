import productDataStore from "../../stores/productDataStore";
import ProductRelateCard from "./ProductRelateCard";
const ProductRelate = () => {
  const items = productDataStore((state) => state.items);
  return (
    <section className="p-10 mx-auto my-8 w-404">
      <h5 class="text-3xl font-bold mb-8">More From This Creator</h5>
      <div className="grid grid-cols-4 gap-4">
        {items
          .sort(() => 0.5 - Math.random()) // สุ่ม array
          .slice(0, 4) // เอา 4 ชิ้น
          .map((item, index) => (
            <div key={index}>

              <ProductRelateCard item={item} />

            </div>
          ))}
      </div>
    </section>
  )
}
export default ProductRelate