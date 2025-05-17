import { Coffee } from '@/components/products/coffee.ts'

export const coffees: Coffee[] = [
  new Coffee(
    'Espresso',
    {
      minimum: 40,
      maximum: 80,
      unit: 'ml',
    },
    8,
  ),
  new Coffee(
    'Espresso fǎrǎ Cofeinǎ',
    {
      minimum: 80,
      unit: 'ml',
    },
    9,
  ),
  new Coffee(
    'Americano',
    {
      minimum: 90,
      unit: 'ml',
    },
    8,
  ),
  new Coffee(
    'Cappuccino',
    {
      minimum: 90,
      unit: 'ml',
    },
    11,
  ).withIngredients('espresso', 'cremǎ de lapte'),
  new Coffee(
    'Cappuccino con Panna',
    {
      minimum: 90,
      unit: 'ml',
    },
    11,
  ).withIngredients('espresso', 'frișcǎ'),
  new Coffee(
    'Latte Machiato',
    {
      minimum: 250,
      unit: 'ml',
    },
    13,
  ).withIngredients('espresso', 'lapte', 'cremǎ de lapte'),
  new Coffee(
    'Cafea în 4 Culori',
    {
      minimum: 220,
      unit: 'ml',
    },
    16,
  ).withIngredients('espresso', 'lapte', 'cremǎ de lapte', 'caramel'),
  new Coffee(
    'Candy Cane Latte',
    {
      minimum: 220,
      unit: 'ml',
    },
    16,
  ).withIngredients('espresso', 'sirop de vanilie', 'sirop ciocolatǎ', 'lapte', 'cremǎ de lapte'),
  new Coffee(
    'Very Vanilla Latte',
    {
      minimum: 220,
      unit: 'ml',
    },
    16,
  ).withIngredients('espresso', 'sirop de vanilie', 'lapte', 'cremǎ de lapte'),
  new Coffee(
    'Caramel Latte',
    {
      minimum: 220,
      unit: 'ml',
    },
    16,
  ).withIngredients('espresso', 'sirop de caramel', 'lapte', 'cremǎ de lapte'),
  new Coffee(
    'Arabian Coffee',
    {
      minimum: 150,
      unit: 'ml',
    },
    13,
  ).withIngredients('espresso', 'scorțișoarǎ', 'vanilie', 'frișcǎ'),
  new Coffee(
    'Irish Coffee',
    {
      minimum: 150,
      unit: 'ml',
    },
    18,
  ).withIngredients('espresso', '20 ml scotch whisky', '20 ml sirop de cacao', 'frișcǎ'),
  new Coffee(
    'Jamaican Coffee',
    {
      minimum: 150,
      unit: 'ml',
    },
    16,
  ).withIngredients('espresso', '20 ml rum', 'frișcǎ'),
  new Coffee(
    'French Coffee',
    {
      minimum: 150,
      unit: 'ml',
    },
    16,
  ).withIngredients('espresso', '20 ml cognac', 'frișcǎ'),
  new Coffee(
    'Ice Cream Frappé',
    {
      minimum: 330,
      unit: 'ml',
    },
    18,
  ),
  new Coffee(
    'Ness Frappé',
    {
      minimum: 330,
      unit: 'ml',
    },
    16,
  ),
  new Coffee(
    'French Vanilla Frappé',
    {
      minimum: 330,
      unit: 'ml',
    },
    16,
  ),
  new Coffee(
    'Brazillian Nut Frappé',
    {
      minimum: 330,
      unit: 'ml',
    },
    16,
  ),
  new Coffee(
    'Frozzito Frappé',
    {
      minimum: 330,
      unit: 'ml',
    },
    16,
  ),
  new Coffee(
    'Chocolate Frappé',
    {
      minimum: 330,
      unit: 'ml',
    },
    16,
  ),
  new Coffee(
    'Lapte cu Cacao',
    {
      minimum: 330,
      unit: 'ml',
    },
    9,
  ),
]

export const gourmetCoffees: Coffee[] = [
  new Coffee(
    'Brazillian Nut',
    {
      minimum: 200,
      unit: 'ml',
    },
    14,
  ),
  new Coffee(
    'French Vanilla',
    {
      minimum: 200,
      unit: 'ml',
    },
    14,
  ),
  new Coffee(
    'Chocolate',
    {
      minimum: 200,
      unit: 'ml',
    },
    14,
  ),
  new Coffee(
    'Frozzito',
    {
      minimum: 200,
      unit: 'ml',
    },
    14,
  ),
]

export const hotChocolate: Coffee[] = [
  new Coffee(
    'White Belgian Chocolate',
    {
      minimum: 200,
      unit: 'ml',
    },
    16,
  ).withIngredients('budincǎ'),
  new Coffee(
    'Dark Belgian Chocolate',
    {
      minimum: 200,
      unit: 'ml',
    },
    16,
  ).withIngredients('budincǎ'),
  new Coffee(
    'White & Dark Belgian Chocolate',
    {
      minimum: 200,
      unit: 'ml',
    },
    18,
  ),
  new Coffee(
    'Flavored Chocolate',
    {
      minimum: 200,
      unit: 'ml',
    },
    15,
  ).withIngredients('ciocolatǎ caldǎ'),
  new Coffee('Piure de Fructe', undefined, 14).withIngredients(
    'fructe de pǎdure, zmeurǎ, fructul pasiunii',
  ),
]
