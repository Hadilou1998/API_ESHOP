import { Product } from "./product";

export class CartItem
{
    id      :   number;
    name    :   string;
    price   :   number;
    link    :   string;
    currency:   string;
    id_user :   number;

    constructor(product: Product)
    {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.link = product.link;
        this.currency = product.currency;
        this.id_user = product.id_user;
    }
}