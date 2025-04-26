import {Product, type Quantity} from "@/components/products/products.ts";

export enum TeaCategory {
  BlackIndia = "Ceai Negru India",
  BlackChina = "Ceai Negru China",
  BlackAromatic = "Ceai Negru Aromat",
  Fermented = "Ceai Semi-Fermentat Aromat",
  GreenWhiteMix = "Ceai Verde și Alb Amestec",
  Green = "Ceai Verde",
  Rooibos = "Ceai Roșu Rooibos",
  Latin = "Ceai America de Sud și America Latinǎ",
  Herbal = "Ceai Plante",
  Ayurvedic = "Amestecuri Ayurveda",
  Fruit = "Amestecuri de Fructe"
}

export class Tea extends Product {
  public description: string;
  public ingredients?: string[];
  public category: TeaCategory;
  public brewTime: number;

  constructor(name: string, quantity: Quantity, price: number, description: string, category: TeaCategory, brewTime: number) {
    super(name, quantity, price);
    this.description = description;
    this.category = category;
    this.brewTime = brewTime;
  }

  public withBrewTime(brewTime: number): Tea {
    this.brewTime = brewTime;
    return this;
  }

  public withQuantity(quantity: Quantity): Tea {
    this.quantity = quantity;
    return this;
  }

  public withIngredients(...ingredients: string[]): Tea {
    this.ingredients = ingredients;
    return this;
  }

  public static baseTea(name: string, description: string, price: number, category: TeaCategory): Tea {
    return new Tea(
      name,
      {
        minimum: 400,
        maximum: 450,
        unit: 'ml'
      },
      price,
      description,
      category,
      6
    )
  }

  /**
   * Creates a new {@Link Tea} with quantity 400 ml/450 ml and brew time of 6 minutes
   * @param name The name of the tea
   * @param description The detailed description about the origin of the tea
   * @param price The price of the tea
   * @param category The category in which the tea fits
   */
  public static blackTea(name: string, description: string, price: number, category: TeaCategory): Tea {
    return this.baseTea(name, description, price, category).withBrewTime(6);
  }

  /**
   * Creates a new {@Link Tea} with quantity 400 ml/450 ml and brew time of 6 minutes
   * @param name The name of the tea
   * @param description The detailed description about the origin of the tea
   * @param price The price of the tea
   * @param category The category in which the tea fits
   */
  public static greenTea(name: string, description: string, price: number, category: TeaCategory): Tea {
    return this.baseTea(name, description, price, category).withBrewTime(6);
  }

  /**
   * Creates a new {@Link Tea} with quantity 400 ml/450 ml, Rooibos {@link TeaCategory} and brew time of 10 minutes
   * @param name The name of the tea
   * @param description The detailed description about the origin of the tea
   * @param price The price of the tea
   */
  public static redTea(name: string, description: string, price: number): Tea {
    return this.baseTea(name, description, price, TeaCategory.Rooibos).withBrewTime(10);
  }

  /**
   * Creates a new {@Link Tea} with quantity 400 ml/450 ml and brew time of 8 minutes
   * @param name The name of the tea
   * @param description The detailed description about the origin of the tea
   * @param price The price of the tea
   * @param category The category in which the tea fits
   */
  public static herbalTea(name: string, description: string, price: number, category: TeaCategory): Tea {
    return this.baseTea(name, description, price, category).withBrewTime(8);
  }

  /**
   * Creates a new {@Link Tea} with quantity 400 ml/450 ml, Fruit {@link TeaCategory} and brew time of 12 minutes
   * @param name The name of the tea
   * @param description The detailed description about the origin of the tea
   * @param price The price of the tea
   */
  public static fruitTea(name: string, description: string, price: number): Tea {
    return this.baseTea(name, description, price, TeaCategory.Fruit).withBrewTime(12);
  }
}
