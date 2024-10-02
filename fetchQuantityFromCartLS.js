import { getCartProductFromLS } from "./getCartProducts"

export const fetchQuantityFromCartLS = (id,price)=>{
    let cartProducts = getCartProductFromLS();

    // console.log("cartproducts is ",cartProducts);

    let existingProduct = cartProducts.find((curProd)=>curProd.id===id);

    let quantity = 1;

    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    // console.log("price is ", price);
    // console.log("quantity is", quantity);

    return {
        quantity, price
    };
}