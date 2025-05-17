export class Product {
  public name: string
  public quantity?: Quantity
  public price: number
  public ingredients?: string[]

  constructor(name: string, price: number, quantity?: Quantity) {
    this.name = name
    this.quantity = quantity
    this.price = price
  }

  public withIngredients(...ingredients: string[]): this {
    this.ingredients = ingredients
    return this
  }
}

export type Quantity = {
  minimum: number
  maximum?: number
  unit: 'ml' | 'l' | 'g' | 'pungǎ' | 'buc' | 'felii'
  maximumUnit?: 'ml' | 'l' | 'g' | 'pungǎ' | 'buc' | 'felii'
}
