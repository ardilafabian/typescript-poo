import axios from "axios";

import { Product } from './models/product.model'

(async () => {

    async function getProducts(): Promise<Product[]> {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        // code
        const data = rta.data as Product[]
        return data;
    }

    console.log('---------------------');
    const products = await getProducts();
    console.log(products.map(item => item.id + ' - ' + item.title));
})();
