import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "./product.model";

export interface ProductService {
    getAll(): Promise<Product[]> | Product[];

    create(data: CreateProductDto): Product | Promise<Product>;

    // add(product: Product): Product;

    update(id: Product['id'], changes: UpdateProductDto ): Product | Promise<Product>;

    findOne(id: Product['id']): Product | undefined | Promise<Product>;
}
