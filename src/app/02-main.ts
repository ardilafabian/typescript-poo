import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
    title: 'product1',
    price: 100,
    description: 'blabla',
    categoryId: 12,
    images: []
});

console.log(productService.getAll());
const productId = productService.getAll()[0].id;


productService.update(productId, {
    title: 'cambio de nombre'
});

const rta = productService.findOne(productId);
console.log(rta);

