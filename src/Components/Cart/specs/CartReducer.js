import CartReducer from "../CartReducer"
import {
    CLEAR_CART, SAVE_DATA, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY,
    ADD_QUANTITY, ADD_SHIPPING
} from '../ActionTypes';

describe('CartReducer', () => {
    const product = {
        id: 1,
        name: "Flex Leggings",
        color: "pink",
        img: "product-photos/pink-front.png",
        AUprice: 60,
        USprice: 40,
        category: "bottoms",
        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
        new: true,
        salesRate: 1,
        img2: "product-photos/pink-back.png"
    }

    it('should return the initial state', () => {
        expect(CartReducer(undefined, {})).toEqual({ addedItems: [], total: 0, currency: "AUD" })
    })

    it('should handle ADD_TO_CART', () => {
        expect(
            CartReducer({ addedItems: [], total: 0,  currency: "AUD" }, {
                type: ADD_TO_CART,
            })
        ).toEqual({
            "addedItems": [], "currency": "AUD",  "total": 0,
        })

        expect(
            CartReducer(
                {
                    addedItems: [{
                        id: 1,
                        name: "Flex Leggings",
                        color: "pink",
                        img: "product-photos/pink-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/pink-back.png"
                    }], total: 0, currency: "AUD"
                },
                {
                    type: ADD_TO_CART,
                    product: product,
                    currency: "USD"
                })
        ).toEqual({
            addedItems: [product], total: 0, currency: "USD"
        })
    })

    it('should handle SAVE_DATA', () => {
        expect(
            CartReducer({ addedItems: [], total: 0, currency: "AUD" }
                , {
                    type: SAVE_DATA,
                    data: {
                        id: 1,
                        name: "Flex Leggings",
                        color: "pink",
                        img: "product-photos/pink-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/pink-back.png"
                    }
                }).toEqual({
                    addedItems: [{
                        id: 1,
                        name: "Flex Leggings",
                        color: "pink",
                        img: "product-photos/pink-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/pink-back.png",
                        size: "XS", quantity: 1
                    }], total: 40,  currency: "AUD"
                })
        )
        expect(
            CartReducer(
                {
                    addedItems: [{
                        id: 1,
                        name: "Flex Leggings",
                        color: "pink",
                        img: "product-photos/pink-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/pink-back.png",
                        quantity: 1,
                        size: "XS"
                    }], currency: "USD", total: 40
                },
                {
                    type: SAVE_DATA,
                    data: {
                        id: 2,
                        name: "Flex Leggings",
                        color: "light grey",
                        img: "product-photos/ltgrey-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/ltgrey-back.png"
                    }
                }

            ).toEqual(
                {
                    addedItems: [{
                        id: 1,
                        name: "Flex Leggings",
                        color: "pink",
                        img: "product-photos/pink-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/pink-back.png",
                        quantity: 1,
                        size: "XS"
                    },
                    {
                        id: 2,
                        name: "Flex Leggings",
                        color: "light grey",
                        img: "product-photos/ltgrey-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/ltgrey-back.png",
                        quantity: 1,
                        size: "S"
                    }
                    ],currency: "AUD", total: 60
                }
            )
        )
    })

    it('should handle REMOVE_ITEM', () => {
        expect(
            CartReducer({ addedItems: [], total: 0, currency: "AUD" }, {
                type: REMOVE_ITEM,
                id: "",
                size: "",
            })
        ).toEqual({ addedItems: [], total: 0, currency: "AUD" })


        expect(
            CartReducer(
                {
                    addedItems: [{
                        id: 1,
                        name: "Flex Leggings",
                        color: "pink",
                        img: "product-photos/pink-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/pink-back.png",
                        quantity: 1,
                        size: "XS"
                    },
                    {
                        id: 2,
                        name: "Flex Leggings",
                        color: "light grey",
                        img: "product-photos/ltgrey-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/ltgrey-back.png",
                        quantity: 1,
                        size: "S"
                    }
                    ], currency: "US", total: 80
                },
                {
                    type: REMOVE_ITEM,
                    id: 1,
                    size: "XS"
                }
            )
        ).toEqual({
            addedItems: [{
                id: 2,
                name: "Flex Leggings",
                color: "light grey",
                img: "product-photos/ltgrey-front.png",
                AUprice: 60,
                USprice: 40,
                category: "bottoms",
                texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                new: true,
                salesRate: 1,
                img2: "product-photos/ltgrey-back.png",
                quantity: 1,
                size: "S"
            }], currency: "US", total: 40
        })
    })

    it('should handle SUB_QUANTITY', () => {

        expect(
            CartReducer(
                {
                    addedItems: [{
                        id: 2,
                        name: "Flex Leggings",
                        color: "light grey",
                        img: "product-photos/ltgrey-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/ltgrey-back.png",
                        quantity: 4,
                        size: "S"
                    }], currency: "AUD", total: 240
                },
                {
                    type: SUB_QUANTITY,
                    id: 2,
                    size: "S",
                }
            )
        ).toEqual({
            addedItems: [{
                id: 2,
                name: "Flex Leggings",
                color: "light grey",
                img: "product-photos/ltgrey-front.png",
                AUprice: 60,
                USprice: 40,
                category: "bottoms",
                texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                new: true,
                salesRate: 1,
                img2: "product-photos/ltgrey-back.png",
                quantity: 3,
                size: "S"
            }],  currency: "AUD", total: 200
        })
    })



    it('should handle ADD_QUANTITY', () => {
        expect(
            CartReducer({
                addedItems: [{
                    id: 2,
                    name: "Flex Leggings",
                    color: "light grey",
                    img: "product-photos/ltgrey-front.png",
                    AUprice: 60,
                    USprice: 40,
                    category: "bottoms",
                    texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                    new: true,
                    salesRate: 1,
                    img2: "product-photos/ltgrey-back.png",
                    quantity: 4,
                    size: "S"
                }],  currency: "AUD", total: 240
            }, {
                    type: ADD_QUANTITY,
                    id: 2,
                    size: "S"
                })
        ).toEqual({
            addedItems: [{
                id: 2,
                name: "Flex Leggings",
                color: "light grey",
                img: "product-photos/ltgrey-front.png",
                AUprice: 60,
                USprice: 40,
                category: "bottoms",
                texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                new: true,
                salesRate: 1,
                img2: "product-photos/ltgrey-back.png",
                quantity: 5,
                size: "S"
            }], currency: "AUD", total: 280
        })
    })


    it('should handle ADD_SHIPPING', () => {
        expect(
            CartReducer({}, {
                type: ADD_SHIPPING,
            })
        ).toEqual({})

        expect(
            CartReducer(
                {
                    addedItems: [{
                        id: 2,
                        name: "Flex Leggings",
                        color: "light grey",
                        img: "product-photos/ltgrey-front.png",
                        AUprice: 60,
                        USprice: 40,
                        category: "bottoms",
                        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                        new: true,
                        salesRate: 1,
                        img2: "product-photos/ltgrey-back.png",
                        quantity: 1,
                        size: "S"
                    }], currency: "AUD", total: 60
                },
                {
                    type: ADD_SHIPPING,
                }
            )
        ).toEqual({
            addedItems: [{
                id: 2,
                name: "Flex Leggings",
                color: "light grey",
                img: "product-photos/ltgrey-front.png",
                AUprice: 60,
                USprice: 40,
                category: "bottoms",
                texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                new: true,
                salesRate: 1,
                img2: "product-photos/ltgrey-back.png",
                quantity: 1,
                size: "S"
            }],  currency: "AUD", total: 70
        })
    })

    it('should handle CLEAR_CART', () => {
        expect(
            CartReducer(
                [],
                {
                    type: CLEAR_CART
                }
            )
        ).toEqual(
            {
                addedItems: [],
                total: 0,
            }
        )

        expect(
            CartReducer(
                [{
                    addedItems: [{ item: "item1" }, { item: "item2" }],
                    total: 100000,
                }],
                {
                    type: CLEAR_CART
                }
            )
        ).toEqual(
            {
                addedItems: [],
                total: 0,
            }
        )
    })


})