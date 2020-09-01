import Product from "../Product"

describe.skip("Product", () => {
const mockProduct = {
    id: "1",
    name: "name",
    color: "color",
    img: "img",
    price: 60,
    category: "category",
    texture: "texture",
    salesRate: "0.5", // a number between 0 and 1
    img2: "img2"
}
const product = Product("1", "name", "color", "img", 60, "category", "texture", "0.5", "img2")

test('Product is created correctly', () => {
    expect(product).toEqual(mockProduct)
});

})