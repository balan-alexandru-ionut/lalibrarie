export class Product {
  protected name: string;
  protected quantity: Quantity;
  protected price: number;

  constructor(name: string, quantity: Quantity, price: number) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

export type Quantity = {
  minimum: number,
  maximum?: number,
  unit: 'ml'|'l'|'g'
}
