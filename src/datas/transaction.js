export const Order = [
    {
        "orderId": "1",
        "productDetail": "101",
        "quantity": 2,
        "date": "DATE",
        "totalPrice": {2 * productDetail.price}
    },
    {
        "orderId": "2",
        "productDetail": "202",
        "quantity": 1,
        "date": "DATE",
        "totalPrice": {1 * productDetail.price}
    }
]

export const Transaction = [
    {
        "orderId": "1",
        "products": [
            {productDetail:101},

        ],
        "orderDate": TIMEDATE,
        "totalPrice": 500,
        "Destination": "customer home detail",
        "Shipping_method": 123
    }

]