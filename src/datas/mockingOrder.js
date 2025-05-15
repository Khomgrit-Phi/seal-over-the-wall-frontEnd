


export const orders =
    {
        orderId: "356945678",
        addressDetail: {
            "name":"Somchai Kitkardee",
            "tel": "0966666666",
            "address": "62/1 Soi Ekkachai 116, Bang Bon Nuea, Bang Bon, 10150, Bangkok, Thailand "
        },

        shippingDetail: {
            "status": "On Delivering",
            "shippingMethod": {
                "method": "Fastest Delivery",
                "cost": 120
            },
            "date": "19 March 2025"
        },

        orderProduct: [
            {   productId: 10,
                productType: "shirt",
                styleName: "more-espresso-less-depresso",
                title: "More Espresso T-Shirt",
                description: "For caffeine-driven motivation, brewed fresh daily.",
                basePrice: 499,
                variants: {
                    size: "M",
                    color: "black",
                    image: "/assets/images/Products/t-shirt/more-espresso/more-espresso-front-black.png"
                }
            }

            ,
            {   productId: 11,
                productType: "shirt",
                styleName: "more-espresso-less-depresso",
                title: "More Espresso T-Shirt",
                description: "For caffeine-driven motivation, brewed fresh daily.",
                basePrice: 499,
                variants: {
                    size: "L",
                    color: "black",
                    image: "/assets/images/Products/t-shirt/more-espresso/more-espresso-front-black.png"
                }
            },
            {   productId: 7,
                productType: "shirt",
                styleName: "fetch-this",
                title: "Fetch This T-Shirt",
                description: "Sassy, classy, and a little bit badass-y.",
                basePrice: 499,
                variants: {
                    size: "M",
                    color: "blue",
                    image: "/assets/images/Products/t-shirt/fetch-this/fetch-front-blue.png"
                }
            },
            {   productId: 5,
                productType: "bag",
                styleName: "don't-kill-my-vibe",
                title: "Don't Kill My Vibe Cup",
                description: "A bold design for unshakable energy.",
                basePrice: 499,
                variants: {
                    size: "one-size",
                    color: "white",
                    image: "/assets/images/Products/bags/fetch/fetch-white.png"
                }

            },
            {   productId: 17,
                productType: "cup",
                styleName: "screaming",
                title: "Screaming Cup",
                description: "The perfect piece for that internal scream of the day.",
                basePrice: 499,
                variants: {
                    size: "one-size",
                    color: "blue",
                    image: "/assets/images/Products/cup/screaming/screaming-blue.png"
                }
            }],

        orderValue: 1696
    }
