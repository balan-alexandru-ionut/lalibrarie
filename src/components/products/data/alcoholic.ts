import { Product } from '@/components/products/products.ts'

export const cocktails: Product[] = [
  new Product('Bacardi Cola', 56, {
    minimum: 1000,
    unit: 'ml',
  }).withIngredients('100 ml Bacardi Rum Superior 8 ani', 'Coca Cola', 'lǎmâie'),
  new Product('Cuba Libre', 24, {
    minimum: 330,
    unit: 'ml',
  }).withIngredients('40 ml Havana Club Blanco', 'Coca Cola', 'lǎmâie'),
  new Product('Vodka Orange', 24, {
    minimum: 330,
    unit: 'ml',
  }).withIngredients('40 Absolut Vodka', 'fresh de portocale'),
  new Product('Campari Orange', 26, {
    minimum: 330,
    unit: 'ml',
  }).withIngredients('40 ml Campari', 'fresh de portocale'),
  new Product('Gin Tonic', 24, {
    minimum: 330,
    unit: 'ml',
  }).withIngredients('40 ml Beefeater London Dry Gin', 'lǎmâie', 'apǎ tonicǎ'),
]

export const bourbons: Product[] = [
  new Product('Jim Beam White', 16, {
    minimum: 50,
    unit: 'ml',
  }),
  new Product("Jack Daniel's", 24, {
    minimum: 50,
    unit: 'ml',
  }),
]

export const whiskey: Product[] = [
  new Product('Johnnie Walker, Red Label', 16, {
    minimum: 50,
    unit: 'ml',
  }),
  new Product('Johnnie Walker, Black Label', 26, {
    minimum: 50,
    unit: 'ml',
  }),
  new Product('JB Rare', 16, {
    minimum: 50,
    unit: 'ml',
  }),
]

export const deluxeWhiskey: Product[] = [
  new Product('Chivas Regal', 28, {
    minimum: 50,
    unit: 'ml',
  }),
]

export const liqueur: Product[] = [
  new Product("Bailey's", 16, {
    minimum: 50,
    unit: 'ml',
  }),
  new Product("Sheridan's", 16, {
    minimum: 50,
    unit: 'ml',
  }),
]

export const cognac: Product[] = [
  new Product('Jidvei VSOP', 16, {
    minimum: 50,
    unit: 'ml',
  }),
]

export const vodka: Product[] = [
  new Product('Absolut Vodka', 12, {
    minimum: 50,
    unit: 'ml',
  }),
]

export const tequila: Product[] = [
  new Product('Camino Real', 15, {
    minimum: 40,
    unit: 'ml',
  }),
]

export const rum: Product[] = [
  new Product('Havana Club Anejo Especial', 17, {
    minimum: 50,
    unit: 'ml',
  }),
  new Product('Havana Club Blanco', 12.5, {
    minimum: 50,
    unit: 'ml',
  }),
]

export const gin: Product[] = [
  new Product('Beefeater, London Dry Gin', 16, {
    minimum: 50,
    unit: 'ml',
  }),
]

export const digestives: Product[] = [
  new Product('Jagermeister', 13, {
    minimum: 40,
    unit: 'ml',
  }),
]

export const bitters: Product[] = [
  new Product('Martini', 12, {
    minimum: 50,
    unit: 'ml',
  }),
  new Product('Campari', 14, {
    minimum: 50,
    unit: 'ml',
  }),
]

export const beers: Product[] = [
  new Product('Silva Blondǎ', 10, {
    minimum: 0.5,
    unit: 'l',
  }),
  new Product('Silva Brunǎ', 12, {
    minimum: 0.5,
    unit: 'l',
  }),
  new Product('Heineken', 11, {
    minimum: 0.4,
    unit: 'l',
  }),
  new Product('Ciuc Premium', 9, {
    minimum: 0.5,
    unit: 'l',
  }),
  new Product('Desperados', 12, {
    minimum: 0.4,
    unit: 'l',
  }),
]

export const nonAlcoholicBeer: Product[] = [
  new Product('Ciuc Radler 0,0%', 9, {
    minimum: 0.5,
    unit: 'l',
  }).withIngredients('lǎmâie', 'zmeurǎ'),
]

export const cider: Product[] = [
  new Product('Strongbow', 11, {
    minimum: 0.33,
    unit: 'l',
  }).withIngredients('mere'),
]

export const bottledWine: Product[] = [
  new Product('Domeniile Panciu Sauvignon Blanc (alb/sec)', 65),
  new Product('Domeniile Panciu Rosé (rosé/sec)', 65),
  new Product('Domeniile Panciu Bǎbeascǎ Neagrǎ (roșu/sec)', 65),
]

export const mulledWine: Product[] = [
  new Product('Carafǎ', 24, {
    minimum: 500,
    unit: 'ml',
  }),
  new Product('Carafǎ', 35, {
    minimum: 1,
    unit: 'l',
  }),
]

export const bagInBoxWine: Product[] = [
  new Product('Pahar', 9, {
    minimum: 150,
    unit: 'ml',
  }),
  new Product('Carafǎ', 24, {
    minimum: 500,
    unit: 'ml',
  }),
  new Product('Carafǎ', 35, {
    minimum: 1,
    unit: 'l',
  }),
]

export const drinksPerCategory = new Map<string, Array<Product>>(
  [
    ['Cocktails', cocktails],
    ['Bourbon', bourbons],
    ['Scotch Whisky', whiskey],
    ['DeLuxe Scotch Whisky', deluxeWhiskey],
    ['Whisky Cream & Liqueur', liqueur],
    ['Cognac', cognac],
    ['Vodka', vodka],
    ['Tequila', tequila],
    ['Rum', rum],
    ['Gin', gin],
    ['Digestiv', digestives],
    ['Bitter & Vermouth', bitters],
    ['Bere', beers],
    ['Bere fǎrǎ alcool', nonAlcoholicBeer],
    ['Cidru', cider],
    ['Vin la sticlǎ', bottledWine],
    ['Vin fiert - Casa Panciu Demisec', mulledWine],
    ['Vin Bag in Box - Casa Panciu', bagInBoxWine],
  ]
)

export const categorySubHeading = new Map<string, string>(
  [
    ['Vin fiert - Casa Panciu Demisec', "(cu anason, cardamom, cuișoare, scorțișoarǎ, mǎr, portocale)"],
    ['Vin Bag in Box - Casa Panciu', "(vin alb/demisec, rosé/demisec, roșu/demisec)"]
  ]
)
