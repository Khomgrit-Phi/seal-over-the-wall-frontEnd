export const variants = [
    // Variants for Shirts (productId: 1, 4, 7, ..., 25)
    ...[1, 4, 7, 10, 13, 16, 19, 22, 25].flatMap(productId => {
      const styleFolder = {
        1: "prove-them",
        4: "don't-kill",
        7: "fetch-this",
        10: "espresso",
        13: "think-out-side-the-box",
        16: "screaming",
        19: "own-lane",
        22: "just-keep-running",
        25: "custom-mike"
      }[productId];
      return ["black", "blue", "gray", "white"].flatMap(color =>
        ["s", "m", "l"].map(size => ({
          productId,
          color,
          size,
          stock: 10,
          image: `src/assets/images/Products/t-shirt/${styleFolder}/${styleFolder}-front-${color}.png`
        }))
      );
    }),

    // Variants for Cups (productId: 2, 5, 8, ..., 26)
    ...[2, 5, 8, 11, 14, 17, 20, 23, 26].flatMap(productId => {
      const styleFolder = {
        2: "prove-them",
        5: "don't-kill",
        8: "fetch-this",
        11: "espresso",
        14: "think-out-side-the-box",
        17: "screaming",
        20: "own-lane",
        23: "just-keep-running",
        26: "custom-mike"
      }[productId];
      return ["black", "blue", "gray", "white"].map(color => ({
        productId,
        color,
        size: "one-size",
        stock: 10,
        image: `src/assets/images/Products/cup/${styleFolder}/${styleFolder}-${color}.png`
      }));
    }),
  
    // Variants for Bags (productId: 3, 6, 9, ..., 27)
    ...[3, 6, 9, 12, 15, 18, 21, 24, 27].flatMap(productId => {
      const styleFolder = {
        3: "prove-them",
        6: "don't-kill",
        9: "fetch-this",
        12: "espresso",
        15: "think-out-side-the-box",
        18: "screaming",
        21: "own-lane",
        24: "just-keep-running",
        27: "custom-mike"
      }[productId];
      return ["black", "blue", "gray", "white"].map(color => ({
        productId,
        color,
        size: "one-size",
        stock: 10,
        image: `src/assets/images/Products/bags/${styleFolder}/${styleFolder}-${color}.png`
      }));
    })
  ];