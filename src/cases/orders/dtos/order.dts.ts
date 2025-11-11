import type { CustomerDTO } from "@/cases/customers/dtos/customer";
import type { ProductDTO } from "@/cases/products/dtos/product.dto";

export interface OrderItem {
    id?: string;
    product: ProductDTO;
    quantity: number;
    value: number;
}

export interface Ordem {
    id?: string;
    custumer: CustomerDTO;
    status: string;
    total: number;
    items: OrderItem[];
    createdAt: Date;
    updatedAt: Date;
}