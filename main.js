import './style.css'
import products from "./api/products.json"

import { showProductContainer } from './homeProductCards';




//calling the function to display all the products as a card

showProductContainer(products);