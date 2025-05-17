import { Product, type Quantity } from '@/components/products/products.ts'

const CAN_QUANTITY: Quantity = {
  minimum: 250,
  unit: 'ml',
}

const BOTTLE_QUANTITY: Quantity = {
  minimum: 500,
  unit: 'ml',
}

export const freshPressedJuice: Product[] = [
  new Product('Portocale sau Grapefruit', 18, {
    minimum: 330,
    unit: 'ml',
  }),
  new Product('Ananas, portocalǎ, grapefruit', 18, {
    minimum: 330,
    unit: 'ml',
  }),
  new Product('Grapefruit și portocalǎ', 18, {
    minimum: 330,
    unit: 'ml',
  }),
]

export const smoothies: Product[] = [
  new Product('Bananǎ, fructe de pǎdure, lapte, miere', 18, {
    minimum: 330,
    unit: 'ml',
  }),
  new Product('Bananǎ, vișine, lapte, miere', 18, {
    minimum: 330,
    unit: 'ml',
  }),
  new Product('Bananǎ, Nutella, lapte', 18, {
    minimum: 330,
    unit: 'ml',
  }),
  new Product('Bananǎ, unt de arahide, lapte', 18, {
    minimum: 330,
    unit: 'ml',
  }),
]

export const sodas: Product[] = [
  new Product('Coca Cola', 9, CAN_QUANTITY),
  new Product('Sprite', 9, CAN_QUANTITY),
  new Product('Schweppes Bitter Lemon', 9, CAN_QUANTITY),
  new Product('Schweppes Mandarin', 9, CAN_QUANTITY),
  new Product('Schweppes Tonic Water', 9, CAN_QUANTITY),
  new Product('Cappy Nectar', 9, CAN_QUANTITY),
  new Product('Apǎ mineralǎ Harghita', 8, BOTTLE_QUANTITY),
  new Product('Apǎ platǎ Perla Harghitei', 7, BOTTLE_QUANTITY),
  new Product('Ice Tea La Librǎrie, Mon Cher!', 9, {
    minimum: 250,
    unit: 'ml',
  }),
]
