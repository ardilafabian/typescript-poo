import axios from "axios";

(async () => {

    function delay(time: number) {
        const promise = new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('true');
            }, time);
        });
        return promise;
    }

    function getProducts() {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products');
        return promise;
    }

    async function getProductsAsync() {
        const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
        return promise.data;
    }

    console.log('---------------------');
    const rts = await delay(3000);
    console.log(rts);

    console.log('---------------------');
    const products = await getProducts();
    console.log(products.data);
})();
