import { Product } from '@/components/products/products.ts'

export const snacks: Product[] = [
  new Product('Zacuscǎ', 14, {
    minimum: 100,
    unit: 'g',
  }).withIngredients('cu pâine toast prǎjitǎ'),
  new Product('Sandwich cu mușchi și cașcaval', 9, {
    minimum: 130,
    unit: 'g',
  }),
]

export const crunchies: Product[] = [
  new Product('Alune', 9, {
    minimum: 100,
    unit: 'g',
  }),
  new Product('Nachos', 15, {
    minimum: 100,
    unit: 'g',
  }).withIngredients('sos de brânzǎ/salsa'),
  new Product('Popcorn', 9, {
    minimum: 1,
    unit: 'pungǎ',
  }),
]

export const sweets: Product[] = [
  new Product('Miere cu Nuci', 15, {
    minimum: 100,
    unit: 'g',
  }).withIngredients('miere', 'alune de pǎdure', 'migdale', 'nuci'),
  new Product('Unt de Arahide cu Biscuiți', 10, {
    minimum: 30,
    maximum: 5,
    unit: 'g',
    maximumUnit: 'buc',
  }),
  new Product('Biscuiți de Ceai', 7, {
    minimum: 5,
    unit: 'buc',
  }).withIngredients('cu ovǎz și semințe'),
  new Product('Biscuiți de Ceai', 9, {
    minimum: 5,
    unit: 'buc',
  }).withIngredients('cu unt și nucǎ'),
  new Product('Cornulețe cu Magiun și Nucǎ', 10, {
    minimum: 5,
    unit: 'buc',
  }),
  new Product('Paleuri cu Ciocolatǎ', 10, {
    minimum: 5,
    unit: 'buc',
  }),
  new Product('Chec', 8, {
    minimum: 3,
    unit: 'felii',
  }),
]
