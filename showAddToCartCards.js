import products from './api/products.json'
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { getCartProductFromLS } from './getCartProducts'
import { removeProdFromCart } from './removeProdFromCart';
import { incrementDecrement } from './incrementDecrement';
import { updateCartProductTotal } from './updateCartProductTotal';

let cartProducts = getCartProductFromLS();


console.log(cartProducts);

let filterProducts = products.filter((curProd)=>{


  return  cartProducts.some((curElem)=> curElem.id === curProd.id);

   

})

console.log(filterProducts);

const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () =>{
    filterProducts.forEach((curProd)=>{

        const {category, id, image, name, stock, price} = curProd;

        let productClone = document.importNode(templateContainer.content, true);

        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);

        const lsActualData = fetchQuantityFromCartLS(id, price);


        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productImage').src = image;

        productClone.querySelector('.productQuantity').textContent = lsActualData.quantity;
        productClone.querySelector('.productPrice').textContent = lsActualData.price;


        productClone.querySelector('.stockElement').addEventListener('click', (event)=>{

          incrementDecrement(event, id, stock, price);

        }
      
      )
        productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=>removeProdFromCart(id));
       

        cartElement.appendChild(productClone);

        console.log(`rendering product: ${name}`);
      
    })
}

showCartProduct();

updateCartProductTotal();


