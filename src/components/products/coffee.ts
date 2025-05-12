import { Product, type Quantity } from '@/components/products/products.ts'

export class Coffee extends Product {
  constructor(name: string, quantity: Quantity|undefined, price: number) {
    super(name, price, quantity)
  }
}
