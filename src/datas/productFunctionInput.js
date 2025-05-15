const fs = require('fs');
const oldProducts = [
  {
    productId: 1,
    productType: "shirt",
    styleName: "prove-them-wrong",
    title: "Prove Them Wrong T-Shirt",
    description: "Go further, we can be even worse.",
    basePrice: 499,
    variants: [
      {
        size: ["s", "m", "l"],
        color: [
          {
            blackColor: [
              {
                colorName: "black",
                shirtImage: [
                  "/assets/images/Products/t-shirt/prove/prove-shirt-black-front.png",
                  "/assets/images/Products/t-shirt/prove/prove-shirt-black-back.png",
                ],
                colorCode: "#202020",
              },
            ],
          },
          {
            whiteColor: [
              {
                colorName: "white",
                shirtImage: [
                  "/assets/images/Products/t-shirt/prove/prove-shirt-white-front.png",
                  "/assets/images/Products/t-shirt/prove/prove-shirt-white-back.png",
                ],
                colorCode: "#FFFDFD",
              },
            ],
          },
          {
            greyColor: [
              {
                colorName: "gray",
                shirtImage: [
                  "/assets/images/Products/t-shirt/prove/prove-shirt-gray-front.png",
                  "/assets/images/Products/t-shirt/prove/prove-shirt-gray-back.png",
                ],
                colorCode: "#5A5959",
              },
            ],
          },
          {
            blueColor: [
              {
                colorName: "blue",
                shirtImage: [
                  "/assets/images/Products/t-shirt/prove/prove-shirt-blue-front.png",
                  "/assets/images/Products/t-shirt/prove/prove-shirt-blue-back.png",
                ],
                colorCode: "#1A2C8B",
              },
            ],
          },
        ],
      },
    ],
  },
];
// ฟังก์ชันแปลงข้อมูล
const transformProducts = (products) => {
  return products.map((product) => {
    const newVariants = [];
    const sizes = product.variants[0].size;
    const colors = product.variants[0].color;
    sizes.forEach((size) => {
      colors.forEach((colorObj) => {
        const colorKey = Object.keys(colorObj)[0];
        const colorData = colorObj[colorKey][0];
        newVariants.push({
          size: size,
          colorName: colorData.colorName,
          colorCode: colorData.colorCode,
          shirtImages: colorData.shirtImage,
        });
      });
    });
    return {
      productId: product.productId,
      productType: product.productType,
      styleName: product.styleName,
      title: product.title,
      description: product.description,
      basePrice: product.basePrice,
      variants: newVariants,
    };
  });
};
// แปลงข้อมูล
const newProducts = transformProducts(oldProducts);
// เขียนไฟล์ JSON ออกมา
fs.writeFileSync('newProducts.json', JSON.stringify(newProducts, null, 2), 'utf8');
console.log('ไฟล์ newProducts.json ถูกสร้างแล้ว!');