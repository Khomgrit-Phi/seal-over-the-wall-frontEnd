import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { getProducts } from "../../services/product";
import productDataStore from "../../stores/productDataStore";
import AdsBanner from "./AdsBanner";
import ProductCard from "./ProductCard";

const itemVariants1 = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProductList = ({ items }) => {
  const allItemsFromStore = productDataStore((state) => state.items);
  const setItems = productDataStore((state) => state.setItems);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      if (Array.isArray(products)) {
        setItems(products);
      } else {
        console.error("Fetched data is not an array:", products);
        // Depending on the actual structure, you might need to access a property, e.g.:
        // setItems(products.data);
        // setItems(products.items);
      }
    };

    if (allItemsFromStore.length === 0) {
      fetchProducts();
    }
  }, [allItemsFromStore.length, setItems]);

  return (
    <section className="p-10 mx-auto my-8 w-404">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-52 gap-y-25">
        {items && items.map((item, index) => (
          <React.Fragment key={item._id}>
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // เปลี่ยน once: false เพื่อให้เล่นตอน scroll ขึ้นด้วย
              variants={itemVariants1}
              className="w-full"
            >
              <ProductCard item={item} />
            </motion.div>
            {index === 7 && (
              <div className="col-span-1 md:col-span-4">
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={itemVariants1}
                  className="w-full"
                >
                  <AdsBanner />
                </motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
